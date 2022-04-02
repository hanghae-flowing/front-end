import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ThrowProject } from '../../redux/slice/postSlice';
import { useNavigate } from 'react-router-dom';

const FileMenu = ({ projectId, open, onClose, children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const kakaoId =
    sessionStorage.getItem('userInfo') &&
    JSON.parse(sessionStorage.getItem('userInfo')).kakaoId;
  const accessToken =
    sessionStorage.getItem('userInfo') &&
    JSON.parse(sessionStorage.getItem('userInfo')).accessToken;
  const userId =
    sessionStorage.getItem('userInfo') &&
    JSON.parse(sessionStorage.getItem('userInfo')).userId;

  const moveToTrashcanHandler = () => {
    const sendingData = {
      projectId,
      userId,
    };
    console.log(sendingData);
    window.alert('삭제 완료');
    dispatch(ThrowProject(sendingData));
  };
  const openProjectHandler = {};
  const bookmarkHandler = {};

  if (!open) return null;
  else {
    return (
      <>
        <ModalDiv>
          <ListDiv>
            <ListName>열기</ListName>
          </ListDiv>
          <ListDiv>
            <SeperationLine />
            <ListName>북마크</ListName>
          </ListDiv>
          <ListDiv>
            <SeperationLine />
            <Delete onClick={moveToTrashcanHandler}>삭제</Delete>
          </ListDiv>
          <button onClick={onClose}>닫기</button>
        </ModalDiv>
      </>
    );
  }
};

const SeperationLine = styled.div`
  border: 1px solid #fbfbfb;
`;

const Delete = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #b96363;
`;

const ListName = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #818181;
`;

const ListDiv = styled.div`
  width: 94.89px;
  height: 38px;
`;

const ModalDiv = styled.div`
  position: absolute;
  width: 122px;
  height: 146px;
  top: 50px;
  right: 5px;
  padding: 21px 16px;
  background: #ffffff;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
`;

export default FileMenu;
