import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectsInTrash } from '../redux/slice/trashSlice';
import GridForm from '../components/form/GridForm';
import { switchPage } from '../redux/slice/navSlice';

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
      <EmptyDiv>
        <EmptyImgDiv></EmptyImgDiv>
        <EmptyP>휴지통이 비어있습니다.</EmptyP>
      </EmptyDiv>
    );
  } else {
    return (
      <TrashDiv>
        <TitleDiv>
          <Title>삭제된 문서</Title>
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
              />
            ))}
        </ProjectDiv>
        <ButtonDiv>
          <EmptyButton>휴지통 비우기</EmptyButton>
        </ButtonDiv>
      </TrashDiv>
    );
  }
};

const TitleDiv = styled.div`
  width: 1496px;
  height: 70px;
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
  gap: 20px;
  margin-top: 1.7rem;
  margin-left: auto;
  margin-right: auto;
  width: 1240px;
  height: 100%;
`;

const TrashDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1496px;
  margin: 186px auto;
`;

const ButtonDiv = styled.div`
  width: 1496px;
`;

const EmptyButton = styled.button`
  width: 180px;
  height: 50px;
  background: #5432d3;
  border-radius: 20px;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  margin-top: 33px;

  color: #ffffff;
  float: right;
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
