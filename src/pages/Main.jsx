import React from 'react';
import styled from 'styled-components';

const Main = () => {
  return (
    <Wrapper>
      <ContentBox>
        <Title>새로운 토스트를 시작해보세요.</Title>
        <WorkSpaceBox>
          <CreateBtn>워크스페이스 생성</CreateBtn>
          <WorkSpaceList>목록</WorkSpaceList>
        </WorkSpaceBox>
      </ContentBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  background-color: skyblue;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentBox = styled.div``;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 400;
  margin-bottom: 30px;
`;

const CreateBtn = styled.button`
  width: 627px;
  height: 570px;
  border-radius: 23px;
  border: none;
  background-color: #d9d9d9;
  cursor: pointer;
`;

const WorkSpaceBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1280px;
`;

const WorkSpaceList = styled.div`
  width: 500px;
  height: 500px;
  background-color: #e3e3e3;
`;

export default Main;
