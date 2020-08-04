import React from 'react';
import styled from 'styled-components';

import Particle from './Particle';

const ConfettiPiece = (props) => {
  return <CenteredWithinParent>
    <Particle
      angle={props.angle}
      color={props.color}
    >
      <Circle></Circle>
    </Particle>
  </CenteredWithinParent>
}

const CenteredWithinParent = styled.div`
`

const Circle = styled.div`
  background-color: red;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  position: absolute;
`

export default ConfettiPiece