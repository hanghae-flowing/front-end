import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ToastAddForm from '../components/form/ToastAddForm';
import ToastGridForm from '../components/form/ToastGridForm';
import { LoadPost } from '../redux/slice/postSlice';

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  // const kakaoId = sessionStorage.getItem('userInfo').kakaoId;
  // const accessToken = sessionStorage.getItem('userInfo').accessToken;
  // const userId = sessionStorage.getItem('userInfo').userId;

  // const sendingData = {
  //   kakaoId,
  //   accessToken,
  //   userId,
  // };

  // useEffect(() => {
  //   dispatch(LoadPost(sendingData));
  // }, [dispatch]);

  const projectList = useSelector(state => state.post.project);

  return (
    <Wrapper>
      <CreateWorkspaceDiv>
        <MainTitle>새로운 토스트를 구워보세요.</MainTitle>
        <WorkSpaceBox onClick={() => setIsOpen(true)} />
      </CreateWorkspaceDiv>
      <MarkedToastDiv>
        {/* {projectList.length > 0 &&
          projectList.map((project, index) => (
            <ToastGridForm
              key={index}
              projectName={project.projectName}
              modifiedAt={project.modifiedAt}
              memberList={project.memberList}
              bookmark={project.bookmark}
              thumbnailNum={project.thumbnailNum}
            />
          ))} */}
      </MarkedToastDiv>
      <ToastAddForm open={isOpen} onClose={() => setIsOpen(false)} />
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
  line-height: 74px;
  width: 444px;
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
