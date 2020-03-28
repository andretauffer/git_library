import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  min-height: 80px;
  background-color: var(--red);
  color: var(--dark);
  border-radius: var(--border-radius);
  overflow: hidden;
  padding: 5px;
  font-family: var(--font-family);
  margin-top: 5px;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 0.8rem;
`;
const Owner = styled.p`
  font-weight: 400;
  font-size: 0.7rem;
`;
const Description = styled.p`
  font-weight: 300;
  font-size: 0.6rem;
`;

const Link = styled.a`
  content: none;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export default ({ name, owner, description, url }) => (
  <Container>
    <Link href={url} target="_blank" />
    <Title>{name}</Title>
    <Owner>{owner}</Owner>
    <Description>{description}</Description>
  </Container>
);
