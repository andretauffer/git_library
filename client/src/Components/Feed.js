import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchList from "./SearchList";
import withSearchState from "../Services/Search/withSearchState";

const Container = styled.div`
  width: 300px;
  height: 300px;
  overflow: scroll;
  position: relative;
  padding-top: 80px;
  @media only screen and (min-width: 700px) {
    width: calc(100% - 350px);
    max-width: 1000px;
    overflow: visible;
    /* position: absolute; */
    top: 0px;
    left: 5px;
  }
`;

const FeedHeader = styled.div`
  color: var(--red);
  background-color: var(--darker);
  text-transform: uppercase;
  font-weight: bold;
  width: 100%;
  height: 80px;
  font-size: 0.9rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
`;

export default withSearchState(({ searchState, searchDispatch }) => {
  const { searchList } = searchState;

  useEffect(() => {
    const abortController = new AbortController();

    fetch(`http://localhost:5000/feed/`)
      .then(res => res.json())
      .then(response => {
        console.log("response", response);
        searchDispatch({ method: "updateFeed", value: response });
      });

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <Container>{searchList && <SearchList {...{ searchState }} />}</Container>
  );
});
