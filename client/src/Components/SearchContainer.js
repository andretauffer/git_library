import React from "react";
import styled from "styled-components";
import SearchBox from "./SearchBox";
import SearchList from "./SearchList";
import HOC from "../Services/HOC";
const { withSearchState } = HOC;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 700px) {
    width: 300px;
    /* position: fixed; */
    padding-top: 60px;
    right: 5px;
    top: 60px;
    justify-content: flex-start;
  }
`;

export default withSearchState(({ path, ...props }) => (
  <Container>
    <SearchBox {...{ path }} {...props} />
    <SearchList {...{ path }} {...props} />
  </Container>
));
