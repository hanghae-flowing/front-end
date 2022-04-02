import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import AddForm from '../components/form/AddForm';
import GridForm from '../components/form/GridForm';
import { LoadPost } from '../redux/slice/postSlice';
import NewTemplateForm from '../components/form/NewTemplateForm';
import { switchPage } from '../redux/slice/navSlice';
import Nav from '../components/menu/Nav';
import { useQuery, useQueryClient } from 'react-query';

const MainPrac = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();

  // const searchResult = queryClient.getQueryData(['searchResult']);
  // console.log('검색', searchResult);

  const { data: searchResult } = useQuery(['searchResult']);

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
  }, [dispatch, searchResult]);

  const projectList = useSelector(state => state.post.project);
  console.log(projectList);

  return (
    <StyledWrap>
      <Nav />
      <StyeldDiv>
        <Inner>
          <NewTemplateForm />
          <SplitDiv>
            <CurrentDoc>최근문서</CurrentDoc>
          </SplitDiv>
          <ProjectDiv>
            {searchResult
              ? searchResult.data.length > 0 &&
                searchResult.data.map((data, index) => (
                  <GridForm
                    key={index}
                    projectName={data.projectName}
                    modifiedAt={data.modifiedAt}
                    memberList={data.memberList}
                    bookmark={data.bookmark}
                    thumbnailNum={data.thumbnailNum}
                    projectId={data.projectId}
                    trash={data.trash}
                  />
                ))
              : projectList.length > 0 &&
                projectList.map((project, index) => (
                  <GridForm
                    key={index}
                    projectName={project.projectName}
                    modifiedAt={project.modifiedAt}
                    memberList={project.memberList}
                    bookmark={project.bookmark}
                    thumbnailNum={project.thumbnailNum}
                    projectId={project.projectId}
                    trash={project.trash}
                  />
                ))}
          </ProjectDiv>
          <AddForm open={isOpen} onClose={() => setIsOpen(false)} />
        </Inner>
      </StyeldDiv>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  width: 100%;
  display: flex;
`;
const StyeldDiv = styled.div`
  width: 100%;
  padding-left: 258px;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SplitDiv = styled.div`
  display: flex;
  height: 46px;
  margin: 0 auto;
`;

const CurrentDoc = styled.span`
  width: 100px;
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
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 60px;
  margin-top: 1.7rem;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
`;

export default MainPrac;
