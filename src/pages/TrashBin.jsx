import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteSelectedFolders,
  deleteSelectedProjects,
  getFoldersInTrash,
  getProjectsInTrash,
  recoverSelectedFolders,
  recoverSelectedProjects,
  setCountingToZero,
} from '../redux/slice/trashSlice';
import GridForm from '../components/form/GridForm';
import { switchPage } from '../redux/slice/navSlice';
import Nav from '../components/menu/Nav';
import { ReactComponent as ArrowDownImg } from '../assets/icons/Arrow_down.svg';
import { ReactComponent as UnCheckedRing } from '../assets/icons/unChecked.svg';
import { ReactComponent as CheckedRing } from '../assets/icons/checked.svg';
import DeleteModal from '../components/form/DeleteModal';
import { ReactComponent as EmptyTrashImage } from '../assets/icons/EmptyTrash.svg';
import FolderCard from '../components/cards/FolderCard';

const TrashBin = () => {
  const dispatch = useDispatch();
  const [allCheck, setAllCheck] = useState(false);
  const [listOpen, setListOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [wantDeletion, setWantDeletion] = useState(false);
  const listToggle = () => {
    setListOpen(!listOpen);
  };

  const allCheckHandler = () => {
    setAllCheck(!allCheck);
  };

  const userId =
    sessionStorage.getItem('userInfo') &&
    JSON.parse(sessionStorage.getItem('userInfo')).userId;

  useEffect(() => {
    const sendingData = {
      userId,
    };
    dispatch(getFoldersInTrash(sendingData));
    dispatch(getProjectsInTrash(sendingData));
    dispatch(switchPage('garbage'));
  }, [dispatch]);

  const selectedProjectsList = useSelector(
    state => state.trash.pleaseThrowThoseProjects,
  );
  const selectedFoldersList = useSelector(
    state => state.trash.pleaseThrowThoseFolders,
  );

  const deleteSelectedProjectsHanlder = () => {
    const sendingData = {
      projectIdList: [...selectedProjectsList],
    };
    const folderSendingData = {
      folderTableIdList: [...selectedFoldersList],
      userId,
    };
    dispatch(
      deleteSelectedProjects({ sendingData, folderSendingData }, { dispatch }),
    );
  };
  const recoverSelectedProjectsHanlder = () => {
    const sendingData = {
      projectIdList: [...selectedProjectsList],
    };
    const folderSendingData = {
      folderTableIdList: [...selectedFoldersList],
      userId,
    };
    dispatch(
      recoverSelectedProjects({ sendingData, folderSendingData }, { dispatch }),
    );
  };

  const folderList = useSelector(state => state.trash.folder);
  const trashList = useSelector(state => state.trash.trash);

  if (trashList.length === 0 && folderList.length === 0) {
    return (
      <StyledWrap>
        <Nav />
        <StyeldDiv>
          <EmptyDiv>
            <EmptyImgDiv>
              <EmptyTrashImage />
            </EmptyImgDiv>
            <EmptyP>???????????? ??????????????????.</EmptyP>
          </EmptyDiv>
        </StyeldDiv>
      </StyledWrap>
    );
  } else {
    return (
      <>
        <StyledWrap>
          <Nav />
          <StyeldDiv>
            <Inner>
              <TrashDiv>
                <AllCheckDiv onClick={allCheckHandler}>
                  {allCheck ? <CheckedRing /> : <UnCheckedRing />}
                  <AllCheckSpan>?????? ??????</AllCheckSpan>
                </AllCheckDiv>

                <SplitDiv>
                  <CurrentDoc onClick={listToggle} listToggle={listOpen}>
                    <p>?????? ??????</p>
                    <ArrowDownImg />
                  </CurrentDoc>
                </SplitDiv>
                <ProjectDiv listToggle={listOpen}>
                  {folderList.length > 0 &&
                    folderList.map((folder, index) => (
                      <FolderCard
                        key={index}
                        modifiedAt={folder.modifiedAt}
                        folderName={folder.folderName}
                        folderTableId={folder.folderTableId}
                        checked={allCheck}
                      />
                    ))}

                  {trashList.length > 0 &&
                    trashList.map((project, index) => (
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
                        checked={allCheck}
                      />
                    ))}
                </ProjectDiv>
                <BorderLine />
                <ButtonDiv>
                  <RecoveryButton
                    onClick={() => {
                      setDeleteModalOpen(true);
                      setWantDeletion(false);
                    }}
                  >
                    ??????
                  </RecoveryButton>
                  <DeleteButton
                    onClick={() => {
                      setDeleteModalOpen(true);
                      setWantDeletion(true);
                    }}
                  >
                    ????????????
                  </DeleteButton>
                </ButtonDiv>
              </TrashDiv>
            </Inner>
          </StyeldDiv>
        </StyledWrap>
        <DeleteModal
          open={deleteModalOpen}
          onClickHandler={
            wantDeletion
              ? deleteSelectedProjectsHanlder
              : recoverSelectedProjectsHanlder
          }
          onClose={() => setDeleteModalOpen(false)}
          deletion={wantDeletion}
        />
      </>
    );
  }
};

const StyledWrap = styled.div`
  width: 100%;
  display: flex;
`;
const StyeldDiv = styled.div`
  width: 100%;
  padding-left: 258px;
`;

const AllCheckSpan = styled.span`
  font-weight: 700;
  font-size: 23px;
  line-height: 29px;
  /* identical to box height */

  align-items: center;
  margin-left: 13px;

  color: #818181;
`;
const AllCheckDiv = styled.div`
  width: 100%;
  margin: 0 0 32px 28px;
  hiehgt: 29px;
`;
const SplitDiv = styled.div`
  width: 1280px;
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
const Inner = styled.div`
  width: 100%;
  max-width: 1340px;
  margin: 0 auto;
  padding-top: 130px;
`;

const TitleDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 21px;
  line-height: 25px;

  color: #818181;
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

const TrashDiv = styled.div`
  width: 100%;
  max-width: 1340px;
  margin: 0 auto;
`;

const ButtonDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: end;
  padding: 0 30px;
`;

const RecoveryButton = styled.button`
  width: 180px;
  height: 50px;
  border: 1px solid #5432d3;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  margin-top: 33px;
  background-color: transparent;
  color: #5432d3;
  border-radius: 30px;
`;

const DeleteButton = styled.button`
  width: 180px;
  height: 50px;
  background: #5432d3;
  border-radius: 30px;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  margin-left: 52px;
  margin-top: 33px;
  color: #ffffff;
`;

const EmptyDiv = styled.div`
  position: aboslute;

  margin: 300px auto;
  width: 350px;
  height: 305px;
`;
const EmptyP = styled.p`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  /* identical to box height */

  color: #7a7a7a;

  display: flex;
  justify-content: center;
  margin-top: 51px;
`;

const EmptyImgDiv = styled.div`
  width: 209px;
  height: 209px;
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0 auto 56px auto;
  padding: 38px;
  border-radius: 50%;
  background-color: #e3e0ff;
`;
const BorderLine = styled.div`
  width: auto;
  height: 2px;
  background-color: #c4c4c4;
  margin: 20px 30px;
`;

export default TrashBin;
