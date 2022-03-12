import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ToastGridForm from '../components/form/ToastGridForm';
import { LoadPost } from '../redux/slice/postSlice';

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadPost());
  }, [dispatch]);

  const projectList = useSelector(state => state.post.project);
  console.log(projectList);

  return (
    <Wrapper>
      <CreateWorkspaceDiv>
        <MainTitle>새로운 토스트를 구워보세요.</MainTitle>
        <WorkSpaceBox />
      </CreateWorkspaceDiv>
      <MarkedToastDiv>
        <ToastGridForm project={projectList} />
        {/* {projectList &&
          projectList.map(project => <ToastGridForm project={project} />)} */}
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
  position: relative;
  right: 203px;
  font-size: 36px;
  font-weight: 700;
  line-height: 43px;
`;

const WorkSpaceBox = styled.div`
  display: flex;
  align-items: center;
  width: 627px;
  height: 570px;
  background-color: #909090;
  cursor: pointer;
  border-radius: 40px;
  margin-right: 20px;
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
