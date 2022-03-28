import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { createNewDocument } from '../../redux/slice/docSlice';
import { NewProject, TemplateProject } from '../cards/NewProject';

const TamplateList = () => {
  const isOpen = useSelector(state => state.tamplate.tampOpen);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const docSendingData = {
    projectId: sessionStorage.getItem('projectInfo'),
  };

  return (
    <StyledWrap toggle={isOpen}>
      <TemplateProject
        width="100%"
        height="180px"
        marginBottom="20px"
        title="마인드맵"
        onClick={() => {
          navigate('mindmap');
        }}
      />
      <TemplateProject
        width="100%"
        height="180px"
        marginBottom="20px"
        title="갭분석"
        onClick={() => {
          navigate('gap');
        }}
      />
      <TemplateProject
        width="100%"
        height="180px"
        marginBottom="20px"
        title="기획서"
        onClick={() => {
          dispatch(createNewDocument({ docSendingData, navigate }));
        }}
      />
      <NewProject
        onClick={() => console.log('클릭')}
        width="100%"
        height="180px"
        marginBottom="20px"
      />
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  width: 300px;
  height: 100%;
  position: fixed;
  top: 0;
  left: ${props => (props.toggle ? '0px' : '-300px')};
  background-color: #e3e0ff;
  padding: 20px;
  padding-top: 70px;
  padding-right: 10px;
  transition: left 0.2s ease-in-out;
  z-index: 11;
  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export default TamplateList;
