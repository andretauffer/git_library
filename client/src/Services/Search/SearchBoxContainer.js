import React, { useEffect } from "react";

export default Component => {
  const Container = ({ searchState, searchDispatch, ...props }) => {
    const { search, sort, totalPages, page, user, path } = searchState;

    let timer;

    const getSearch = () => {
      const query = user
        ? `http://localhost:5000/api/search/${path}?q=${search}+user:${user}&sort=${sort}&page=${page}`
        : `http://localhost:5000/api/search/${path}?q=${search}&sort=${sort}&page=${page}`;

      return (timer = setTimeout(() => {
        fetch(query)
          .then(res => res.json())
          .then(data => {
            console.log("data", data);
            searchDispatch({ method: "updateList", value: data, path });
          });
      }, 3000));
    };
    const onClickArrows = direction => {
      if (direction === "left" && page > 1) {
        searchDispatch({
          method: "input",
          field: "page",
          value: Number(page) - 1
        });
      }
      if (direction === "right" && page < totalPages) {
        searchDispatch({
          method: "input",
          field: "page",
          value: Number(page) + 1
        });
      }
    };

    useEffect(() => {
      const abortController = new AbortController();
      search && getSearch();
      return () => {
        clearTimeout(timer);
        abortController.abort();
      };
    }, [search, sort, page, user]);

    return (
      <Component
        {...{ onClickArrows, searchState, searchDispatch, path }}
        {...props}
      />
    );
  };

  return Container;
};
