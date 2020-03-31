import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  max-height: 100px;
  max-width: 100px;
  align-self: center;
`;

const Svg = styled.svg`
  position: relative;
  height: 100px;
  width: 100px;
`;

const Spinner = styled.circle`
  stroke-width: 10px;
  stroke-dasharray: 250px;
  stroke-linecap: round;
  position: relative;
  z-index: 100;
  stroke: var(--red);
  animation: move-offset 10s infinite linear;
  @keyframes move-offset {
    100% {
      stroke-dashoffset: 0;
    }
  }
`;

const Loading = styled.p`
  color: var(--red);
  font-family: var(--font-family);
  text-transform: uppercase;
  font-size: 0.8rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: glow 3s infinite forwards;
  @keyframes glow {
    50% {
      color: var(--red-transparent);
    }
    100% {
      color: var(--red);
    }
  }
`;

export default ({ spinner }) => {
  if (spinner)
    return (
      <Container>
        <Svg>
          <Spinner
            cx="50"
            cy="50"
            r="40"
            stroke="black"
            strokeDashoffset="1000"
            fill="transparent"
          />
        </Svg>
        <Loading>Loading...</Loading>
      </Container>
    );
  return null;
};
