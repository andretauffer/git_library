import React, { useEffect } from "react";

export default (Component) => {
  const Container = ({ searchState, searchDispatch, ...props }) => {
    const { search, sort, totalPages, page, user, path } = searchState;

    const onClickArrows = (direction) => {
      if (direction === "left" && page > 1) {
        searchDispatch({
          method: "input",
          field: "page",
          value: Number(page) - 1,
        });
      }
      if (direction === "right" && page < totalPages) {
        searchDispatch({
          method: "input",
          field: "page",
          value: Number(page) + 1,
        });
      }
    };

    useEffect(() => {
      const abortController = new AbortController();

      if (search) searchDispatch({ method: "spinner" });

      let timer;

      const getSearch = () => {
        const query = user
          ? `/api/search/${path}?q=${search}+user:${user}&sort=${sort}&page=${page}`
          : `/api/search/${path}?q=${search}&sort=${sort}&page=${page}`;

        return setTimeout(() => {
          fetch(query)
            .then((res) => res.json())
            .then((data) => {
              if (data.error) {
                return searchDispatch({ method: "error", error: data.error });
              }
              return searchDispatch({
                method: "updateList",
                value: data,
                path,
              });
            })
            .catch((err) => searchDispatch({ method: "error", error: err }));
        }, 3000);
      };

      if (search) {
        timer = getSearch();
      }

      return () => {
        clearTimeout(timer);
        abortController.abort();
      };
    }, [search, sort, page, user, path, searchDispatch]);

    return (
      <Component
        {...{ onClickArrows, searchState, searchDispatch, path }}
        {...props}
      />
    );
  };

  return Container;
};
