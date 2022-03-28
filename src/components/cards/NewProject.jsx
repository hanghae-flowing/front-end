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
      <div>새 프로젝트</div>
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
