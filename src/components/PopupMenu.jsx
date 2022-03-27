import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SaveImg } from '../assets/icons/Save_light.svg';
import { ReactComponent as DownloadImg } from '../assets/icons/Download_light.svg';
import { ReactComponent as TamplateImg } from '../assets/icons/Tamplate_line.svg';
import { ReactComponent as LogoutImg } from '../assets/icons/Sign_out.svg';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { kakaoLogout } from '../redux/slice/userSlice';
import { userInfo } from '../API';

const PopupMenu = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Logout = () => {
    dispatch(kakaoLogout(userInfo.accessToken)).then(() => {
      navigate('/login');
    });
  };

  return (
    <StyledWrap onClick={props.onClick}>
      <Tab>
        <p>저장하기</p>
        <SaveImg />
      </Tab>
      <Tab>
        <p>다운로드</p>
        <DownloadImg />
      </Tab>
      <Tab>
        <p>템플릿</p>
        <TamplateImg />
      </Tab>
      <Tab>
        <p>히스토리</p>
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
