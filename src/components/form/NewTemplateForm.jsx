import React from 'react';
import styled from 'styled-components';
import NewProject from '../cards/NewProject';

const NewTemplateForm = props => {
  return (
    <StyledDiv>
      <GridWrap>
        <NewProject />
      </GridWrap>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  background-color: #e3e0ff;
  width: 100%;
  height: 329px;
  padding-top: 100px;
  padding-bottom: 50px;
  padding-left: 200px;
`;

const GridWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: nowrap;
  background-color: #eee;
`;

export default NewTemplateForm;
