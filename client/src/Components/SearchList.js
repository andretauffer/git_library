import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Container = styled.div`
  width: 300px;
  max-height: 100%;
  border-radius: var(--border-radius);
  border: none;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export default ({ searchState }) => {
  const { searchList, path } = searchState;
  console.log("inside list", searchState, path);
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