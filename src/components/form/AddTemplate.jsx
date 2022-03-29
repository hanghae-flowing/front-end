import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { postNodeTable } from '../../redux/slice/nodeSlice';
import { createNewDocument, openDoc } from '../../redux/slice/docSlice';
import { createNewSwot } from '../../redux/slice/swotSlice';

const AddTemplate = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const projectId = props.projectId;

  const addNodeTable = () => {
    dispatch(postNodeTable(projectId)).then(res => {
      navigate(`/workspace/${projectId}/mindmap/${res.payload.nodeTableId}`);
    });
  };

  const docOpenHandler = () => {
    const docSendingData = {
      projectId,
    };
    dispatch(openDoc({ docSendingData, navigate }));
  };

  const swotOpenHandler = () => {
    const swotSendingData = {
      projectId,
    };
    dispatch(createNewSwot(swotSendingData));
    navigate('swot');
  };

  return (
    <StyledDiv>
      <StyledWrap>
        <Close onClick={props.onClick}>닫기</Close>
        <AddDiv>
          <AddBox>갭분석</AddBox>
          <AddBox onClick={addNodeTable}>마인드맵</AddBox>
          <AddBox onClick={swotOpenHandler}>SWOT</AddBox>
          <AddBox onClick={docOpenHandler}>기획서</AddBox>
        </AddDiv>
      </StyledWrap>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

const StyledWrap = styled.div`
  width: 1024px;
  height: 230px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #5432d3;
  border-radius: 25px;
  padding: 20px;
  padding-top: 60px;
`;

const Close = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 30px;
  border: none;
  background-color: #fff;
  border-radius: 6px;
`;

const AddDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AddBox = styled.div`
  width: calc(100% / 4 - 20px);
  height: 150px;
  background-color: #fff;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default AddTemplate;
