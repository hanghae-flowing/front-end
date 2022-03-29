import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getTemplate, isModal } from '../../redux/slice/tempSlice';
import { NewProject, TemplateProject } from '../cards/NewProject';
import AddTemplate from '../form/AddTemplate';

const TemplateList = props => {
  const isOpen = useSelector(state => state.template.tempOpen);
  const addOpen = useSelector(state => state.template.addOpen);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemplate(props.projectId));
  }, [dispatch]);
  return (
    <StyledWrap toggle={isOpen}>
      {addOpen ? (
        <AddTemplate
          onClick={() => dispatch(isModal(false))}
          projectId={props.projectId}
        />
      ) : null}
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
      />
      <NewProject
        onClick={() => dispatch(isModal(true))}
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

export default TemplateList;
