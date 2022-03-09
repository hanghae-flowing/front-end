import React from 'react';
import styled from 'styled-components';

const SpaceWrap = props => {
  return (
    <>
      <Wrap>{props.children}</Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: skyblue;
`;

export default SpaceWrap;
