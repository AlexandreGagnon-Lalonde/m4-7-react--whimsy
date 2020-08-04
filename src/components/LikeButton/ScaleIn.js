import React from "react";

import styled, { keyframes } from "styled-components";

import { useSpring, animated } from "react-spring";

const ScaleIn = ({ children }) => {
  const style = useSpring({
    transform: 'scale(1)',
    opacity: 1,
    left: '100%',
    position: 'absolute',
    left: '8px',
    top: '8px',
    from: {
      opacity: 0,
      transform: 'scale(0)'
    },
    config: {
      tension: 250,
      friction: 12,
    },
  });

  return <animated.div style={style}>{children}</animated.div>;
};

export default ScaleIn;
