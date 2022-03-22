import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ToastAddForm from '../components/form/ToastAddForm';
import ToastGridForm from '../components/form/ToastGridForm';
import { LoadPost } from '../redux/slice/postSlice';

const MainPrac = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const kakaoId =
    sessionStorage.getItem('userInfo') &&
    JSON.parse(sessionStorage.getItem('userInfo')).kakaoId;
  const accessToken =
    sessionStorage.getItem('userInfo') &&
    JSON.parse(sessionStorage.getItem('userInfo')).accessToken;
  const userId =
    sessionStorage.getItem('userInfo') &&
    JSON.parse(sessionStorage.getItem('userInfo')).userId;

  const sendingData = {
    kakaoId,
    accessToken,
    userId,
  };

  useEffect(() => {
    dispatch(LoadPost(sendingData));
  }, [dispatch]);

  const projectList = useSelector(state => state.post.project);

  const ToListDetailHandler = () => {
    navigate('/listdetail');
  };

  return (
    <>
      <MainDiv>
        <WorkSpaceDiv>
          <MainTitle>새로운 토스트를 구워보세요.</MainTitle>
          <WorkSpaceBox onClick={() => setIsOpen(true)} />
        </WorkSpaceDiv>
        <ToListDetail onClick={ToListDetailHandler}>더보기 </ToListDetail>
        <ProjectDiv>
          {projectList.length > 0 &&
            projectList.map((project, index) => (
              <ToastGridForm
                key={index}
                projectName={project.projectName}
                modifiedAt={project.modifiedAt}
                memberList={project.memberList}
                bookmark={project.bookmark}
                thumbnailNum={project.thumbnailNum}
              />
            ))}
        </ProjectDiv>
      </MainDiv>
      <ToastAddForm open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

const MainDiv = styled.div`
  width: 1277px;
  height: 646px;
  margin-top: 247px;
  margin-left: auto;
  margin-right: auto;
`;

const MainTitle = styled.h1`
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 30px;
  line-height: 46px;
  letter-spacing: -0.04em;
  width: 381px;
  height: 46px;
  color: #59391e;
`;

const WorkSpaceDiv = styled.div`
  width: 627px;
  height: 646px;
  float: left;
`;

const WorkSpaceBox = styled.div`
  width: 627px;
  height: 570px;
  background-color: #daab74;
  cursor: pointer;
  border-radius: 40px;
`;

const ProjectDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 28px;
  gap: 60px 24px;
  width: 630px;
  height: 567px;
  float: right;
`;

const ToListDetail = styled.div`
  width: 81px;
  height: 28px;
  font-weight: 500;
  font-size: 21px;
  line-height: 25px;
  letter-spacing: -0.05em;
  float: right;
  color: #8b5726;
  margin-bottom: 25px;
`;

export default MainPrac;
