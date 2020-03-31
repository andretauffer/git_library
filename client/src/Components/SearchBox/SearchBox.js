import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import HOC from "../../Services/HOC";
import {
  Container,
  SearchInput,
  PageNumbersContainer,
  PageInput,
  SortResults,
  PaginationContainer,
  Page,
  PagesDisplay,
  PagesTitle,
  InputContainer,
  InputTitle,
  ArrowLeft,
  ArrowRight,
  SearchIcon,
  Warning
} from "./SearchBoxStyles";

const { SearchBoxContainer } = HOC;

export default SearchBoxContainer(
  ({ onClickArrows, searchState, searchDispatch }) => {
    const { search, totalPages, page, user, path } = searchState;

    return (
      <Container>
        <SortResults
          onChange={e =>
            searchDispatch({
              method: "changeType",
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
          <PageNumbersContainer>
            <PageInput
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
          </PageNumbersContainer>
          <Page margin={"5px 0 0 10px"} onClick={() => onClickArrows("right")}>
            <ArrowRight />
          </Page>
        </PaginationContainer>
      </Container>
    );
  }
);
