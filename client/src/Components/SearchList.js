import React from "react";
import styled from "styled-components";
import Card from "./Card";

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

export default ({ searchState }) => {
  const { searchList, path } = searchState;
  return (
    <Container>
      {searchList &&
        searchList.map(item => (
          <Card
            key={item.id}
            {...{
              item,
              path
            }}
          />
        ))}
    </Container>
  );
};
