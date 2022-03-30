import React from 'react';
import styled from 'styled-components';

const Path = () => {
  return (
    <StyledDiv>
      <svg width="100%" height="100%">
        <line
          x1="100px"
          y1="200px"
          x2="500px"
          y2="500px"
          style={{ stroke: 'rgb(0,0,0)', strokeWidth: 1 }}
        />
        <path d="M100 100 L 300 600" fill="transparent" stroke="black" />
      </svg>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export default Path;
