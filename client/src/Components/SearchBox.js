import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import HOC from "../Services/HOC";

const { SearchBoxContainer } = HOC;

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

const BlackBox = css`
  margin-top: 5px;
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

const Container = styled.div`
  margin-top: 20px;
  width: 300px;
  position: relative;
`;

const SearchInput = styled.input`
  ${Row}
  ${Style}
  position: relative;
  margin-top: 5px;
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
  align-items: center;
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
  ${BlackBox}
  margin-left: 5px;
`;

const PagesTitle = styled.p`
  position: absolute;
  top: 5px;
  left: 0px;
  font-size: 0.5rem;
  text-transform: uppercase;
`;

const InputContainer = styled.div`
  position: relative;
`;

const InputTitle = styled.p`
  position: absolute;
  top: 10px;
  left: 5px;
  font-size: 0.5rem;
  text-transform: uppercase;
  color: var(--red);
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
  top: 15px;
  right: 10px;
  color: var(--red);
`;

const Warning = styled.div`
  ${BlackBox}
  height: 20px;
  text-transform: uppercase;
  color: var(--red);
  font-weight: bold;
  font-size: 0.8rem;
  text-align: center;
  background-color: var(--darker);
`;

export default SearchBoxContainer(
  ({ onClickArrows, searchState, searchDispatch }) => {
    const { search, totalPages, page, user, path } = searchState;

    return (
      <Container>
        <SortResults
          onChange={e =>
            searchDispatch({
              method: "input",
              field: "path",
              value: e.target.value
            })
          }
        >
          <option value="repositories">Respositories</option>
          <option value="codes">Codes</option>
        </SortResults>
        <InputContainer>
          <SearchInput
            autoFocus
            {...{
              placeholder: `Search for ${path}...`,
              value: search,
              onChange: e =>
                searchDispatch({
                  method: "input",
                  field: "search",
                  value: e.target.value
                })
            }}
          />
          <SearchIcon>
            <FontAwesomeIcon icon={faSearch} />
          </SearchIcon>
        </InputContainer>
        {path === "codes" && <Warning>This query requires a username</Warning>}

        <InputContainer>
          <SearchInput
            {...{
              placeholder: `By user...`,
              value: user,
              onChange: e =>
                searchDispatch({
                  method: "input",
                  field: "user",
                  value: e.target.value
                })
            }}
          />
          <InputTitle>Username</InputTitle>
        </InputContainer>
        {path === "repositories" && (
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
        )}
        {path === "codes" && (
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
            <option value="indexed">Indexed</option>
          </SortResults>
        )}
        <PaginationContainer>
          <Page margin={"5px 10px 0 0"}>
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
          <Page margin={"5px 0 0 10px"} onClick={() => onClickArrows("right")}>
            <ArrowRight />
          </Page>
        </PaginationContainer>
      </Container>
    );
  }
);
