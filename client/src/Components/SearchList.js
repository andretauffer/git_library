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
  const { searchList } = searchState;
  return (
    <Container>
      {searchList &&
        searchList.map(item => (
          <Card
            key={item.id}
            {...{
              name: item.name,
              owner: item.owner.login,
              description: item.description,
              url: item.html_url
            }}
          />
        ))}
    </Container>
  );
};
