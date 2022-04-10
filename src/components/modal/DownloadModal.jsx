import React from 'react';
import styled from 'styled-components';

const DownloadModal = props => {
  return (
    <StyledWrap>
      <StyledDiv>
        <p>아직 준비중입니다 ㅠㅠ</p>
        <Button onClick={props.onClick}>닫기</Button>
      </StyledDiv>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 480px;
  height: 200px;
  border-radius: 30px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  & p {
    font-size: 18px;
    color: #767676;
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  width: 260px;
  height: 50px;
  border-radius: 50px;
  background-color: #fff;
  border: 2px solid #5432d3;
  font-size: 18px;
  color: #5432d3;
`;

export default DownloadModal;
