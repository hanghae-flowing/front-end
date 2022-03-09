import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ToastGridForm from '../components/form/ToastGridForm';

const Main = () => {
  const navigate = useNavigate();

  const createsNewWorkspace = e => {
    navigate('workspace');
  };

  return (
    <Wrapper>
      <CreateWorkspaceDiv>
        <MainTitle>새로운 토스트를 구워보세요.</MainTitle>
        <WorkSpaceBox onClick={createsNewWorkspace} />
      </CreateWorkspaceDiv>
      <MarkedToastDiv>
        <ToastGridForm />
        <ToastGridForm />
        <ToastGridForm />
        <ToastGridForm />
      </MarkedToastDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: #f0f0f0;
  justify-content: center;
  align-content: center;
`;

const CreateWorkspaceDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 50%;
  justify-content: flex-end;
  align-content: center;
`;

const MainTitle = styled.h1`
  margin-right: 28%;
  font-size: 34px;
  font-weight: 400;
>>>>>>> origin/issue#10
`;

const WorkSpaceBox = styled.div`
  display: flex;
  align-items: center;
  width: 627px;
  height: 570px;
  background-color: #909090;
  cursor: pointer;
  border-radius: 10px;
`;

const MarkedToastDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 50%;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
`;

export default Main;
