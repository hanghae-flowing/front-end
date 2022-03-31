import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import AddForm from '../components/form/AddForm';
import GridForm from '../components/form/GridForm';
import { LoadPost } from '../redux/slice/postSlice';
import NewTemplateForm from '../components/form/NewTemplateForm';
import { switchPage } from '../redux/slice/navSlice';

const MainPrac = () => {
  const dispatch = useDispatch();
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
    dispatch(switchPage('main'));
  }, [dispatch]);

  const projectList = useSelector(state => state.post.project);
  console.log(projectList);

  return (
    <>
      <NewTemplateForm />
      <SplitDiv>
        <CurrentDoc>최근문서</CurrentDoc>
      </SplitDiv>
      <ProjectDiv>
        {projectList.length > 0 &&
          projectList.map((project, index) => (
            <GridForm
              key={index}
              projectName={project.projectName}
              modifiedAt={project.modifiedAt}
              memberList={project.memberList}
              bookmark={project.bookmark}
              thumbnailNum={project.thumbnailNum}
              projectId={project.projectId}
            />
          ))}
      </ProjectDiv>
      <AddForm open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

const SplitDiv = styled.div`
  display: flex;
  width: 77%;
  height: 46px;
  margin: 0 auto;
`;

const CurrentDoc = styled.span`
  width: 89px;
  height: 29px;
  font-weight: 700;
  font-size: 1.4em;
  line-height: 2em;

  color: #818181;
`;

const DropdownMenu = styled.button`
  width: 122px;
  height: 46px;

  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 9px;

  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #818181;
`;

const ProjectDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 1.7rem;
  margin-left: auto;
  margin-right: auto;
  width: 77%;
  height: 100%;
`;

export default MainPrac;
