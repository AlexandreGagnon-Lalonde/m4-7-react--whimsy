import React from "react";

import styled, { keyframes } from "styled-components";

const PoppingCircle = ({ size, color }) => {
  return <Wrapper style={{ width: size, height: size, backgroundColor: color }}></Wrapper>;
};

const scale = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const fade = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const Wrapper = styled.div`
  display: block;
  border-radius: 50%;
  z-index: 1;
  animation: ${scale} 300ms ease-in forwards,
    ${fade} 400ms ease-in forwards;
`;

export default PoppingCircle;
