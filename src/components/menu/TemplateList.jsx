import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getNodeTableId } from '../../redux/slice/nodeSlice';
import { getTemplate, isModal, isOpen } from '../../redux/slice/tempSlice';
import { NewProject, TemplateProject } from '../cards/NewProject';
import AddTemplate from '../form/AddTemplate';
import { openDoc } from '../../redux/slice/docSlice';

const TemplateList = props => {
  const tempOpen = useSelector(state => state.template.tempOpen);
  const addOpen = useSelector(state => state.template.addOpen);
  // const nodeTableList = useSelector(state => state.template.nodeTableList);
  // const documentList = useSelector(state => state.template.documentList);
  // const gapTableList = useSelector(state => state.template.gapTableList);
  // const swotList = useSelector(state => state.template.swotList);
  const documentId = useSelector(state => state.post.documentId);
  const gapTableId = useSelector(state => state.post.gapTableId);
  const nodeTableId = useSelector(state => state.post.nodeTable);
  console.log(documentId);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const projectId = props.projectId;

  const docOpenHandler = () => {
    const docSendingData = {
      projectId: projectId,
    };

    dispatch(openDoc(docSendingData));
  };
  //한솔 dont touch

  useEffect(() => {
    if (!projectId) return;
    dispatch(getTemplate(projectId)).then(res => {
      console.log(res);
    });
  }, [projectId]);

  return (
    <StyledWrap toggle={tempOpen}>
      <ToggleBtn
        toggle={tempOpen}
        onClick={() => {
          dispatch(isOpen());
        }}
      >
        <Line />
        <Line />
        <Line />
      </ToggleBtn>
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
          navigate(`mindmap/${nodeTableId}`);
          dispatch(getNodeTableId(nodeTableId));
        }}
      />
      <TemplateProject
        width="100%"
        height="180px"
        marginBottom="20px"
        title="갭분석"
        onClick={() => {
          navigate(`gap/${gapTableId}`);
        }}
      />
      <TemplateProject
        width="100%"
        height="180px"
        marginBottom="20px"
        title="기획서"
        onClick={() => {
          navigate(`proposal/${documentId}`);
          docOpenHandler();
        }}
      />
      {/* <NewProject
        onClick={() => dispatch(isModal(true))}
        width="100%"
        height="180px"
        marginBottom="20px"
      /> */}
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
  z-index: 12;
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

const ToggleBtn = styled.button`
  position: fixed;
  top: 50%;
  left: ${props => (props.toggle ? '300px' : '0px')};
  transition: left 0.2s ease-in-out;
  transform: translateY(-50%);
  width: 25px;
  height: 80px;
  border: none;
  background-color: #e3e0ff;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Line = styled.span`
  width: 2px;
  height: 20px;
  background-color: #fff;
  display: block;
`;

export default TemplateList;
