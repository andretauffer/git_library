import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Card from "./Card";
import Spinner from "./Spinner";

const Container = styled.div`
  width: 300px;
  border-radius: var(--border-radius);
  border: none;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  @media only screen and (min-width: 700px) {
    width: 100%;
  }
`;

const ErrorMessage = styled.p`
  color: var(--red);
  font-family: var(--font-family);
`;

const SearchList = ({ searchState }) => {
  const { searchList, path, spinner, error } = searchState;
  return (
    <Container>
      <Spinner {...{ spinner }} />
      {searchList &&
        searchList.map((item, i) => (
          <Card
            key={item.id + i}
            {...{
              item,
              path
            }}
          />
        ))}
      {error && (
        <ErrorMessage>
          {error}. Please try reloading the page in a minute or so.
        </ErrorMessage>
      )}
    </Container>
  );
};

SearchList.propTypes = {
  searchState: PropTypes.shape({
    search: PropTypes.string,
    searchList: PropTypes.array,
    fullResult: PropTypes.object,
    sort: PropTypes.string,
    totalPages: PropTypes.number,
    page: PropTypes.string,
    user: PropTypes.string,
    path: PropTypes.string,
    latestKeywords: PropTypes.array,
    spinner: PropTypes.bool.isRequired
  })
};

export default SearchList;
