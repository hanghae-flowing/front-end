import React from 'react';
import styled from 'styled-components';
import GapNode from './GapNode';
import MileStone from './MileStone';
import Node from './Node';

export const MindMapToolBox = props => {
  return (
    <StyledDiv bgColor="#E3E0FF">
      <Node nodeTableId={props.nodeTableId} />
    </StyledDiv>
  );
};

export const GapToolBox = props => {
  return (
    <StyledDiv bgColor="#4a4a4a">
      <GapNode gapTableId={props.gapTableId} />
      <MileStone />
    </StyledDiv>
  );
};

const StyeldWrap = styled.div`
  width: 100%;
`;

const StyledDiv = styled.div`
  height: 64px;
  background-color: ${props => props.bgColor};
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  transition: all 0.2s ease-in-out;
  border-radius: 20px;
  box-shadow: 0px 10px 30px -2px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  z-index: 11;
  &:hover {
    transform: translateX(-50%) translateY(0);
  }
`;
