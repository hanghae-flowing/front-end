import React from 'react';
import styled from 'styled-components';
import { ReactComponent as DownloadImg } from '../../assets/icons/Download_light.svg';
import { ReactComponent as LogoutImg } from '../../assets/icons/Sign_out.svg';

import { useNavigate } from 'react-router-dom';

const PopupMenu = props => {
  const navigate = useNavigate();
  // const projectId = useSelector(state => state.post.projectInfo.projectId);

  return (
    <StyledWrap>
      <Tab>
        <p>다운로드</p>
        <DownloadImg />
      </Tab>
      <Line />
      <Tab onClick={() => navigate('/signout')}>
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
