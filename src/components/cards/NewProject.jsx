import React from 'react';
import styled from 'styled-components';

export const NewProject = props => {
  return (
    <StyledWrap onClick={props.onClick}>
      <div>새 프로젝트</div>
    </StyledWrap>
  );
};

export const TemplateProject = props => {
  return (
    <StyledWrap onClick={props.onClick}>
      <div>템플릿</div>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  width: 275px;
  height: 180px;
  background-color: #fff;
  border-radius: 25px;
  margin-right: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;
