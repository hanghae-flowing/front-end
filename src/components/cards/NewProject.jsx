import React from 'react';
import styled from 'styled-components';

export const NewProject = props => {
  return (
    <StyledWrap
      onClick={props.onClick}
      width={props.width}
      height={props.height}
      marginRight={props.marginRight}
      marginBottom={props.marginBottom}
    >
      <Line rotate="0" />
      <Line rotate="90deg" />
    </StyledWrap>
  );
};

export const TemplateProject = props => {
  return (
    <StyledWrap
      onClick={props.onClick}
      width={props.width}
      height={props.height}
      marginRight={props.marginRight}
      marginBottom={props.marginBottom}
    >
      <div>{props.title}</div>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: #fff;
  border-radius: 25px;
  margin-right: ${props => props.marginRight};
  margin-bottom: ${props => props.marginBottom};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const Line = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${props => props.rotate});
  background-color: #777;
  width: 30px;
  height: 3px;
  border-radius: 10px;
`;
