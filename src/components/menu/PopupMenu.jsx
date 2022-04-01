import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as DownloadImg } from '../../assets/icons/Download_light.svg';
import { ReactComponent as LogoutImg } from '../../assets/icons/Sign_out.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { kakaoLogout } from '../../redux/slice/userSlice';

import { sendInvite } from '../../redux/slice/inviteSlice';

const PopupMenu = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailToSendInvitationRef = useRef();
  // const projectId = useSelector(state => state.post.projectInfo.projectId);
  const projectId =
    sessionStorage.getItem('projectInfo') &&
    JSON.parse(sessionStorage.getItem('projectInfo')).projectInfo.projectId;
  const accessToken =
    sessionStorage.getItem('userInfo') &&
    JSON.parse(sessionStorage.getItem('userInfo')).accessToken;

  const Logout = () => {
    dispatch(kakaoLogout(accessToken)).then(() => {
      navigate('/login');
    });
  };

  const invitationHandler = () => {
    const userId = JSON.parse(sessionStorage.getItem('userInfo')).userId;
    const addingUser = emailToSendInvitationRef.current.value;
    const invitationData = {
      projectId,
      userId,
      email: addingUser,
    };
    console.log(invitationData);
    dispatch(sendInvite(invitationData));

    // 초대할사람이메일 초대한사람유저아이디 프로젝트아이디
  };

  return (
    <StyledWrap>
      <Tab>
        <p>다운로드</p>
        <DownloadImg />
      </Tab>
      <Tab>
        <p onClick={invitationHandler}>초대하기</p>
        <input ref={emailToSendInvitationRef} placeholder="email"></input>
      </Tab>
      <Line />
      <Tab onClick={Logout}>
        <p>로그아웃</p>
        <LogoutImg />
      </Tab>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  position: fixed;
  top: 60px;
  left: 15px;
  padding: 40px 26px 20px;
  width: 200px;
  background-color: #221d7e;
  border-radius: 10px;
`;

const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  cursor: pointer;
  color: #e3e3e3;
  font-size: 21px;
  &:hover {
    color: #fff;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #fff;
  opacity: 50%;
  margin-bottom: 20px;
`;

export default PopupMenu;
