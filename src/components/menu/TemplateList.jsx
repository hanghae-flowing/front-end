import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getNodeTableId } from '../../redux/slice/nodeSlice';
import { getTemplate, isModal } from '../../redux/slice/tempSlice';
import { NewProject, TemplateProject } from '../cards/NewProject';
import AddTemplate from '../form/AddTemplate';

const TemplateList = props => {
  const isOpen = useSelector(state => state.template.tempOpen);
  const addOpen = useSelector(state => state.template.addOpen);
  const nodeTableList = useSelector(state => state.template.nodeTableList);
  const documentList = useSelector(state => state.template.documentList);
  const gapTableList = useSelector(state => state.template.gapTableList);
  const swotList = useSelector(state => state.template.swotList);
  console.log('nodeTableList', nodeTableList);
  console.log('documentList', documentList);
  console.log('gapTableList', gapTableList);
  console.log('swotList', swotList);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const projectId = props.projectId;

  useEffect(() => {
    if (!projectId) return;
    dispatch(getTemplate(projectId));
  }, [projectId]);

  return (
    <StyledWrap toggle={isOpen}>
      {addOpen ? (
        <AddTemplate
          onClick={() => dispatch(isModal(false))}
          projectId={props.projectId}
        />
      ) : null}
      {nodeTableList &&
        nodeTableList.map((data, index) => (
          <TemplateProject
            key={index}
            width="100%"
            height="180px"
            marginBottom="20px"
            title={`마인드맵 ${data.nodeTableId}번`}
            onClick={() => {
              navigate(`mindmap/${data.nodeTableId}`);
              dispatch(getNodeTableId(data.nodeTableId));
            }}
          />
        ))}
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
