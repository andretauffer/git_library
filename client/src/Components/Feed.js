import React, { useEffect } from "react";
import styled from "styled-components";
import SearchList from "./SearchList";
import withSearchState from "../Services/Search/withSearchState";

const Container = styled.div`
  width: 95%;
  height: 350px;
  overflow: scroll;
  position: relative;
  padding-top: 80px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  @media only screen and (min-width: 700px) {
    width: calc(100% - 350px);
    max-width: 1000px;
    overflow: visible;
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
  min-height: ${props =>
    props.latestKeywords.length === 0 ? "70px" : "120px"};
  font-size: 0.9rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  margin-top: 10px;
  padding: 10px;
  border-radius: var(--border-radius);
`;

const KeywordsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const Keyword = styled.div`
  padding: 10px;
  border-radius: var(--border-radius);
  border: var(--border);
  font-family: var(--font-family);
  color: var(--red);
  position: relative;
  margin-right: 5px;
`;

const HeaderHighlight = styled.div`
  color: var(--blue);
`;

export default withSearchState(({ searchState, searchDispatch }) => {
  const { searchList, latestKeywords } = searchState;

  useEffect(() => {
    const abortController = new AbortController();
    searchDispatch({ method: "spinner" });

    fetch(`http://localhost:5000/feed/`)
      .then(res => res.json())
      .then(response => {
        searchDispatch({ method: "updateFeed", value: response });
      });

    return () => {
      abortController.abort();
    };
  }, [searchDispatch]);

  return (
    <Container>
      <FeedHeader {...{ latestKeywords }}>
        {latestKeywords.length === 0 ? (
          <div>
            <HeaderHighlight>Default feed</HeaderHighlight> do your first
            searches to see the feed updating on every page load based on the
            most popular search keywords
          </div>
        ) : (
          <div>
            Recent results based on the
            <HeaderHighlight>most popular</HeaderHighlight> keywords
          </div>
        )}

        <KeywordsContainer>
          {latestKeywords &&
            latestKeywords.map((kw, i) => (
              <Keyword key={i + kw.name}>{kw.name}</Keyword>
            ))}
        </KeywordsContainer>
      </FeedHeader>
      {searchList && <SearchList {...{ searchState }} />}
    </Container>
  );
});
