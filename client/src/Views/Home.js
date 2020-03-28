import React from "react";
import styled from "styled-components";
import SearchBox from "../Components/SearchBox";
import SearchList from "../Components/SearchList";
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

export default withSearchState(props => (
  <Container>
    <SearchBox {...props} />
    <SearchList {...props} />
  </Container>
));
