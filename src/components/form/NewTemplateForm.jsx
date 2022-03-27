import React, { useState } from 'react';
import styled from 'styled-components';
import { NewProject, TemplateProject } from '../cards/NewProject';
import AddForm from './AddForm';

const NewTemplateForm = props => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      {isOpen ? (
        <AddForm
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      ) : null}
      <StyledDiv>
        <GridWrap>
          <NewProject onClick={handleToggle} />
          <TemplateProject />
          <TemplateProject />
          <TemplateProject />
          <TemplateProject />
        </GridWrap>
      </StyledDiv>
    </>
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
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: nowrap;
  overflow-y: hidden;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export default NewTemplateForm;
