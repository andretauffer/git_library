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
    height: auto;
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
    props.latestKeywords.length === 0 ? "70px" : "150px"};
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
  margin-top: 10px;
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

const HeaderHighlight = styled.p`
  color: var(--blue);
  font-size: ${props => (props.header ? props.header : "1rem")};
  letter-spacing: 1px;
`;

export default withSearchState(({ searchState, searchDispatch }) => {
  const { searchList, latestKeywords } = searchState;

  useEffect(() => {
    const abortController = new AbortController();
    searchDispatch({ method: "spinner" });

    const getFeed = () => {
      fetch(`http://localhost:5000/feed/`)
        .then(res => res.json())
        .then(response => {
          if (response.error) {
            return searchDispatch({ method: "error", error: response.error });
          }
          return searchDispatch({ method: "updateFeed", value: response });
        });
    };

    getFeed();

    return () => {
      abortController.abort();
    };
  }, [searchDispatch]);

  return (
    <Container>
      <FeedHeader {...{ latestKeywords }}>
        <HeaderHighlight header={"1.5rem"}>Repos Feed</HeaderHighlight>
        {latestKeywords.length === 0 ? (
          <div>
            The <HeaderHighlight>feed</HeaderHighlight> will update using the
            most popular keywords searched in this platform
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
