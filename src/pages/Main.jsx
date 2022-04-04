import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import AddForm from '../components/form/AddForm';
import GridForm from '../components/form/GridForm';
import { LoadPost } from '../redux/slice/postSlice';
import { switchPage } from '../redux/slice/navSlice';
import Nav from '../components/menu/Nav';
import { useQuery } from 'react-query';
import { NewProject } from '../components/cards/NewProject';
import { ReactComponent as ArrowDownImg } from '../assets/icons/Arrow_down.svg';

const MainPrac = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  const [listOpen, setListOpen] = useState(false);

  const listToggle = () => {
    setListOpen(!listOpen);
  };

  // const searchResult = queryClient.getQueryData(['searchResult']);
  // console.log('검색', searchResult);

  const { data: searchResult } = useQuery(['searchResult'], () => {});

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

  return (
    <StyledWrap>
      <Nav />
      <StyeldDiv>
        <Inner>
          <SplitDiv>
            <CurrentDoc onClick={listToggle} listToggle={listOpen}>
              <p>최근문서</p>
              <ArrowDownImg />
            </CurrentDoc>
          </SplitDiv>
          <ProjectDiv listToggle={listOpen}>
            <NewProject
              width="calc(100% / 5 - 60px)"
              height="auto"
              onClick={handleToggle}
            />
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
                    width="calc(100% / 5 - 60px)"
                    height="auto"
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
                    width="calc(100% / 5 - 60px)"
                    height="auto"
                  />
                ))}
          </ProjectDiv>
          <BorderLine />
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
  max-width: 1340px;
  margin: 0 auto;
  padding-top: 130px;
`;

const SplitDiv = styled.div`
  max-width: 1280px;
  margin: 0 30px;
`;

const CurrentDoc = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  & p {
    font-weight: 700;
    font-size: 1.3em;
    color: #818181;
  }
  & svg {
    transform: ${props => (props.listToggle ? 'rotate(180deg)' : '')};
  }
`;

const ProjectDiv = styled.div`
  width: 100%;
  height: ${props => (props.listToggle ? '100%' : '210px')};
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  margin-top: 1.7rem;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
`;

const BorderLine = styled.div`
  width: auto;
  height: 2px;
  background-color: #c4c4c4;
  margin: 20px 30px;
`;

export default MainPrac;
