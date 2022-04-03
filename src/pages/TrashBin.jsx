import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectsInTrash } from '../redux/slice/trashSlice';
import GridForm from '../components/form/GridForm';
import { switchPage } from '../redux/slice/navSlice';
import Nav from '../components/menu/Nav';

const TrashBin = () => {
  const dispatch = useDispatch();
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
          <TrashDiv>
            <TitleDiv>
              <Title>삭제목록</Title>
            </TitleDiv>

            <ProjectDiv>
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
                    width={'100%'}
                    height={'26%'}
                  />
                ))}
            </ProjectDiv>
            <ButtonDiv>
              <RecoveryButton>복원</RecoveryButton>
              <DeleteButton>영구삭제</DeleteButton>
            </ButtonDiv>
          </TrashDiv>
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
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 60px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  height: 100%;
`;

const TrashDiv = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 184px auto;
  padding: 0 20px;
`;

const ButtonDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: end;
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

export default TrashBin;
