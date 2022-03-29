import React from 'react';
import styled from 'styled-components';

const GapNode = () => {
  return <StyledDiv></StyledDiv>;
};

const StyledDiv = styled.div`
  width: 100px;
  height: 38px;
  margin-right: 20px;
  border-radius: 10px;
  background-color: #f3f3f3;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export default GapNode;
