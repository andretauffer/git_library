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
`;

export default withSearchState(({ path, ...props }) => (
  <Container>
    <SearchBox {...{ path }} {...props} />
    <SearchList {...{ path }} {...props} />
  </Container>
));
