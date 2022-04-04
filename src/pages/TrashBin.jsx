import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteSelectedProjects,
  getProjectsInTrash,
  recoverSelectedProjects,
} from '../redux/slice/trashSlice';
import GridForm from '../components/form/GridForm';
import { switchPage } from '../redux/slice/navSlice';
import Nav from '../components/menu/Nav';
import { ReactComponent as ArrowDownImg } from '../assets/icons/Arrow_down.svg';
import { ReactComponent as UnCheckedRing } from '../assets/icons/unChecked.svg';
import { ReactComponent as CheckedRing } from '../assets/icons/checked.svg';

const TrashBin = () => {
  const dispatch = useDispatch();
  const [allCheck, setAllCheck] = useState(false);
  const [listOpen, setListOpen] = useState(false);

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
    dispatch(getProjectsInTrash(sendingData));
    dispatch(switchPage('garbage'));
  }, [dispatch]);

  const selectedProjectsList = useSelector(
    state => state.trash.pleaseThrowThoseProjects,
  );

  const deleteSelectedProjectsHanlder = () => {
    const sendingData = {
      projectIdList: [...selectedProjectsList],
    };
    console.log(sendingData);
    dispatch(deleteSelectedProjects(sendingData));
  };
  const recoverSelectedProjectsHanlder = () => {
    const sendingData = {
      projectIdList: [...selectedProjectsList],
    };
    console.log(sendingData);
    dispatch(recoverSelectedProjects(sendingData));
  };

  const trashList = useSelector(state => state.trash.trash);
  console.log(trashList);

  if (!trashList) {
    return (
      <StyledWrap>
        <Nav />
        <StyeldDiv>
          <EmptyDiv>
            <EmptyImgDiv></EmptyImgDiv>
            <EmptyP>휴지통이 비어있습니다.</EmptyP>
          </EmptyDiv>
        </StyeldDiv>
      </StyledWrap>
    );
  } else {
    return (
      <StyledWrap>
        <Nav />
        <StyeldDiv>
          <Inner>
            <TrashDiv>
              <AllCheckDiv onClick={allCheckHandler}>
                {allCheck ? <CheckedRing /> : <UnCheckedRing />}
                <AllCheckSpan>모두 선택</AllCheckSpan>
              </AllCheckDiv>

              <SplitDiv>
                <CurrentDoc onClick={listToggle} listToggle={listOpen}>
                  <p>삭제 목록</p>
                  <ArrowDownImg />
                </CurrentDoc>
              </SplitDiv>
              <ProjectDiv listToggle={listOpen}>
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
                <RecoveryButton onClick={recoverSelectedProjectsHanlder}>
                  복원
                </RecoveryButton>
                <DeleteButton onClick={deleteSelectedProjectsHanlder}>
                  영구삭제
                </DeleteButton>
              </ButtonDiv>
            </TrashDiv>
          </Inner>
        </StyeldDiv>
      </StyledWrap>
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
  width: 202px;
  height: 202px;
`;
const EmptyP = styled.p`
  font-weight: 400;
  font-size: 21px;
  line-height: 26px;
  display: flex;
  justify-content: center;
  color: #7a7a7a;
`;

const EmptyImgDiv = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0 auto 56px auto;
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
