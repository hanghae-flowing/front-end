import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getTemplate, isModal, isOpen } from '../../redux/slice/tempSlice';
import { TemplateProject } from '../cards/NewProject';
import AddTemplate from '../form/AddTemplate';
import { openDoc } from '../../redux/slice/docSlice';
import MindmapThumbnail from '../../assets/images/img_thumb_mindmap.png';
import GapThumbnail from '../../assets/images/img_thumb_gap.png';
import DocsThumbnail from '../../assets/images/img_thumb_docs.png';
import SwotThumbnail from '../../assets/images/img_thumb_swot.png';

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
  const swotId = useSelector(state => state.post.swotId);
  // console.log('docs', documentId);
  // console.log('gap', gapTableId);
  // console.log('nodetable', nodeTableId);
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
    dispatch(getTemplate(projectId));
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
        title="마인드맵"
        onClick={() => {
          navigate(`mindmap/${nodeTableId}`);
        }}
        backgroundImage={MindmapThumbnail}
      />
      <TemplateProject
        title="SWOT"
        onClick={() => {
          navigate(`swot/${swotId}`);
        }}
        backgroundImage={SwotThumbnail}
      />
      <TemplateProject
        title="갭분석"
        onClick={() => {
          navigate(`gap/${gapTableId}`);
        }}
        backgroundImage={GapThumbnail}
      />
      <TemplateProject
        title="기획서"
        onClick={() => {
          navigate(`proposal/${documentId}`);
          docOpenHandler();
        }}
        backgroundImage={DocsThumbnail}
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
  background-color: #5432d3;
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
  transition: left 0.2s ease-in-out, transform 0.1s ease-in-out;
  transform: translateY(-50%);
  width: 27px;
  height: 100px;
  border: none;
  background-color: #5432d3;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  &:hover {
    transform: translateY(-50%) scale(1.15);
  }
`;

const Line = styled.span`
  width: 1px;
  height: 40px;
  background-color: #fff;
  display: block;
`;

export default TemplateList;
