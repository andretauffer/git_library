import React from "react";
import styled from "styled-components";
import SearchComponent from "../Components/SearchContainer";
import Feed from "../Components/Feed";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export default () => (
  <Container>
    <Feed className="feed" />
    <SearchComponent />
  </Container>
);
