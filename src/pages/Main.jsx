import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import AddForm from '../components/form/AddForm';
import GridForm from '../components/form/GridForm';
import { LoadPost } from '../redux/slice/postSlice';
import { switchPage } from '../redux/slice/navSlice';
import Nav from '../components/menu/Nav';
import { useQuery } from 'react-query';
import { ReactComponent as ArrowDownImg } from '../assets/icons/Arrow_down.svg';
import { ReactComponent as FileAddImg } from '../assets/icons/File_dock_light.svg';
import { ReactComponent as FolderAddImg } from '../assets/icons/Folder_add_light.svg';
import AddFolderForm from '../components/form/AddFolderForm';
import { useFolderList } from '../hooks/useFolderList';
import FolderCard from '../components/cards/FolderCard';
import Dropdown from '../components/modules/Dropdown';

const MainPrac = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [folderOpen, setFolderOpen] = useState(false);

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
    kakaoId: kakaoId,
    accessToken: accessToken,
    userId: userId,
  };

  useEffect(() => {
    if (!kakaoId) return;
    if (!accessToken) return;
    if (!userId) return;
    dispatch(LoadPost(sendingData));
    dispatch(switchPage('main'));
  }, [dispatch, searchResult, kakaoId, accessToken, userId]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  const [currentListOpen, setCurrentListOpen] = useState(false);
  const [allListOpen, setAllListOpen] = useState(false);

  const currentListToggle = () => {
    setCurrentListOpen(!currentListOpen);
  };
  const allListToggle = () => {
    setAllListOpen(!allListOpen);
  };

  const { status, data: folderList, error, isFetching } = useFolderList(userId);

  const renderFolderList = useCallback(() => {
    switch (status) {
      case 'loading':
        return <div>loading</div>;
      case 'error':
        if (error instanceof Error) {
          return <span>Error: {error.message}</span>;
        }
        break;
      default:
        return (
          <>
            {folderList?.map(data => (
              <FolderCard
                key={data.folderTableId}
                folderTableId={data.folderTableId}
                userId={data.userId}
                folderName={data.folderName}
                modifiedAt={data.modifiedAt}
                trash={data.modifiedAt}
              />
            ))}
          </>
        );
    }
  }, [status, isFetching]);

  const projectList = useSelector(state => state.post.project);

  return (
    <StyledWrap>
      <Nav />
      <StyeldDiv>
        <Inner>
          <SplitDiv>
            <CurrentDoc
              onClick={currentListToggle}
              listToggle={currentListOpen}
            >
              <p>최근문서</p>
              <ArrowDownImg />
            </CurrentDoc>
            <FlexDiv>
              <AddBtn onClick={handleToggle}>
                <FileAddImg />
              </AddBtn>
              <AddBtn>
                <FolderAddImg onClick={() => setFolderOpen(true)} />
              </AddBtn>
              <Dropdown />
            </FlexDiv>
          </SplitDiv>
          <ProjectDiv listToggle={currentListOpen}>
            {searchResult
              ? searchResult?.data.map((data, index) => (
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
                    height="212px"
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
                    height="212px"
                  />
                ))}
          </ProjectDiv>
          <BorderLine />
          <SplitDiv>
            <CurrentDoc onClick={allListToggle} listToggle={allListOpen}>
              <p>전체</p>
              <ArrowDownImg />
            </CurrentDoc>
          </SplitDiv>
          <ProjectDiv listToggle={allListOpen}>
            {renderFolderList()}
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
                  trash={project.trash}
                  width="calc(100% / 5 - 60px)"
                  height="auto"
                />
              ))}
          </ProjectDiv>
          <AddForm open={isOpen} onClose={() => setIsOpen(false)} />
          <AddFolderForm
            open={folderOpen}
            onClose={() => setFolderOpen(false)}
          />
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
  display: flex;
  justify-content: space-between;
`;

const CurrentDoc = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: start;
  cursor: pointer;
  & p {
    font-weight: 700;
    font-size: 1.3em;
    color: #818181;
    padding-right: 20px;
  }
  & svg {
    transform: ${props => (props.listToggle ? 'rotate(180deg)' : '')};
  }
`;

const FlexDiv = styled.div`
  display: flex;
  cursor: pointer;
`;

const AddBtn = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e3e0ff;
  border-radius: 10px;
  margin-left: 14px;
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
  margin: 70px 30px 30px;
`;

export default MainPrac;
