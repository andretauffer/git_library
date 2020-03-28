import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Row = css`
  height: 40px;
  width: 100%;
`;

const Style = css`
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
  margin-top: 20px;
  height: 150px;
  width: 300px;
  position: relative;
`;

const SearchInput = styled.input`
  ${Row}
  ${Style}
`;

const SortResults = styled.select`
  ${Row}
  ${Style}
  margin-top: 5px;
`;

const PaginationContainer = styled.div`
  ${Row}
  margin-top: 5px;
  display: flex;
  flex-flow: row nowrap;
`;

const Page = styled.div`
  ${Style}
  min-width: 40px;
  height: 100%;
  margin: ${props => props.margin};
  position: relative;
`;

const PagesDisplay = styled.div`
  ${Row}
  margin-left: 5px;
  border-radius: var(--border-radius);
  border: none;
  text-indent: 10px;
  background-color: var(--darker);
  color: var(--red);
  font-size: 0.9rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const PagesTitle = styled.p`
  position: absolute;
  top: 5px;
  left: 0px;
  font-size: 0.5rem;
  text-transform: uppercase;
`;

const ArrowLeft = styled.div`
  width: 10px;
  height: 10px;
  border-right: 10px solid var(--red);
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-70%, -50%);
`;

const ArrowRight = styled.div`
  width: 10px;
  height: 10px;
  border-left: 10px solid var(--red);
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-30%, -50%);
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: var(--red);
`;

export default ({ searchState, searchDispatch }) => {
  const { search, sort, totalPages, page } = searchState;

  let timer;

  const getSearch = () =>
    (timer = setTimeout(() => {
      fetch(
        `http://localhost:5000/api/search?q=${search}&sort=${sort}&page=${page}`
      )
        .then(res => res.json())
        .then(data => {
          searchDispatch({ method: "updateList", value: data });
        });
    }, 3000));

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
  }, [search, sort, page]);

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
      <SortResults
        onChange={e =>
          searchDispatch({
            method: "input",
            field: "sort",
            value: e.target.value
          })
        }
      >
        <option value="sort">Best Match</option>
        <option value="starts">Stars</option>
        <option value="forks">Forks</option>
        <option value="help-wanted-issues">Help Wanted Issues</option>
        <option value="updated">Last updated</option>
      </SortResults>
      <PaginationContainer>
        <Page margin={"0 10px 0 0"}>
          <ArrowLeft onClick={() => onClickArrows("left")} />
        </Page>
        <SearchInput
          value={page}
          type="number"
          min="1"
          onChange={e =>
            searchDispatch({
              method: "input",
              field: "page",
              value: e.target.value
            })
          }
        />
        <PagesDisplay>
          <PagesTitle>Pages</PagesTitle>
          {totalPages}
        </PagesDisplay>
        <Page margin={"0 0 0 10px"} onClick={() => onClickArrows("right")}>
          <ArrowRight />
        </Page>
      </PaginationContainer>
      <SearchIcon>
        <FontAwesomeIcon icon={faSearch} />
      </SearchIcon>
    </Container>
  );
};
