import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Inputs = css`
  height: 40px;
  width: 100%;
  border-radius: var(--border-radius);
  border: 2px solid var(--red);
  text-indent: 10px;
  background-color: var(--dark);
  color: var(--red);
  ::placeholder {
    color: var(--red);
  }
`;

const Container = styled.div`
  height: 150px;
  width: 300px;
  background-color: blue;
  position: relative;
`;

const SearchInput = styled.input`
  ${Inputs}
`;

const SortResults = styled.select`
  ${Inputs}
  margin-top: 5px;
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: var(--red);
`;

export default ({ searchState, searchDispatch }) => {
  const { search } = searchState;

  let timer;

  const getSearch = () =>
    (timer = setTimeout(() => {
      fetch(`http://localhost:5000/api/search?q=${search}`)
        .then(res => res.json())
        .then(data => {
          console.log("the items", data);
          searchDispatch({ method: "updateList", value: data });
        });
    }, 3000));

  useEffect(() => {
    search && getSearch();
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <Container>
      <SearchInput
        autoFocus
        {...{
          placeholder: "Search for repositories...",
          value: search,
          onChange: e =>
            searchDispatch({
              method: "input",
              field: "search",
              value: e.target.value
            })
        }}
      />
      <SortResults>
        <option value="">Best Match</option>
        <option value="starts">Stars</option>
        <option value="forks">Forks</option>
        <option value="help-wanted-issues">Help Wanted Issues</option>
        <option value="updated">Last updated</option>
      </SortResults>
      <SearchIcon>
        <FontAwesomeIcon icon={faSearch} />
      </SearchIcon>
    </Container>
  );
};
