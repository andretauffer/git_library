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
  position: relative;
  padding: 15px;
  @media only screen and (min-width: 700px) {
    width: 400px;
    right: 5px;
    top: 60px;
    justify-content: flex-start;
  }
`;

const BorderBox = styled.div`
  position: absolute;
  top: 30px;
  bottom: 0px;
  left: 5px;
  right: 5px;
  z-index: -1;
  border: 2px solid var(--red);
  border-radius: var(--border-radius);
  background-color: var(--darker);
  @media only screen and (min-width: 700px) {
    top: 30px;
    bottom: 0px;
  }
`;

export default withSearchState(({ path, ...props }) => (
  <Container>
    <SearchBox {...{ path }} {...props} />
    <SearchList {...{ path }} {...props} />
    <BorderBox />
  </Container>
));
