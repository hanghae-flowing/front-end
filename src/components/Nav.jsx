import React from 'react';
import styled from 'styled-components';
import { userInfo } from '../API';
import { ReactComponent as SearchImg } from '../assets/icons/Search_duotone_line.svg';
import { ReactComponent as LogoutImg } from '../assets/icons/Expand_down.svg';
import { useDispatch, useSelector } from 'react-redux';
import { kakaoLogout } from '../redux/slice/userSlice';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogin = useSelector(state => state.user.isLogin);
  const tabbed = useSelector(state => state.nav.tabbed);
  const crtPage = useSelector(state => state.nav.currentPage);
  console.log(crtPage);

  const Logout = () => {
    dispatch(kakaoLogout(userInfo.accesToken)).then(() => {
      navigate('login');
    });
  };
  return (
    <StyledWrap toggle={tabbed}>
      {isLogin ? (
        <FlexDiv padding="0 0 20px 0">
          <ProfileCircle></ProfileCircle>
          <FlexDiv column={true} justify="space-between" padding="6px 0 0 12px">
            <Nickname>{userInfo.nickname}</Nickname>
            <Email>{userInfo.Email}</Email>
          </FlexDiv>
        </FlexDiv>
      ) : (
        <FlexDiv>로그인 해주세여</FlexDiv>
      )}
      <FlexDiv padding="0 0 30px 0">
        <SearchWrap>
          <SearchImg />
          <Search />
        </SearchWrap>
      </FlexDiv>
      <FlexDiv grow="1" column={true}>
        <Tab
          onClick={() => {
            navigate('/main');
          }}
        >
          <TabIcon></TabIcon>
          <p>전체</p>
        </Tab>
        <Tab
          onClick={() => {
            navigate('/notice');
          }}
        >
          <TabIcon></TabIcon>
          <p>알림</p>
        </Tab>
        <Tab>
          <TabIcon></TabIcon>
          <p>폴더</p>
        </Tab>
        <Tab>
          <TabIcon></TabIcon>
          <p>환경설정</p>
        </Tab>
        <Tab>
          <TabIcon></TabIcon>
          <p>내 설정</p>
        </Tab>
        <Tab>
          <TabIcon></TabIcon>
          <p>휴지통</p>
        </Tab>
      </FlexDiv>
      <FlexDiv>
        <LogoutBtn onClick={Logout}>
          <p>로그아웃</p>
          <LogoutImg />
        </LogoutBtn>
      </FlexDiv>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  position: fixed;
  top: 0;
  left: ${props => (props.toggle ? '0' : '-360px')};
  background-color: #5432d3;
  height: 100vh;
  width: 360px;
  padding: 120px 60px 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const FlexDiv = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  padding: ${props => props.padding};
  flex-grow: ${props => props.grow};
`;

const ProfileCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background-color: #4222b9;
`;

const Nickname = styled.p`
  color: #fff;
  font-size: 24px;
  font-weight: 500;
`;

const Email = styled.p`
  color: #bfbfbf;
  font-size: 16px;
  font-weight: 400;
`;

const SearchWrap = styled.div`
  width: 100%;
  height: 43px;
  border-radius: 11px;
  background-color: #4222b9;
  box-shadow: -3px 4px 10px rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0 10px;
`;

const Search = styled.input`
  width: 100%;
  font-size: 18px;
  background-color: #4222b9;
  border: none;
  padding-left: 10px;
  color: #bfbfbf;
  &:focus {
    outline: none;
  }
`;

const Tab = styled.div`
  width: 100%;
  height: 57px;
  background-color: #5432d3;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  margin-bottom: 13px;
  &:hover {
    background-color: #150f84;
  }
  p {
    color: #fff;
    font-size: 21px;
  }
`;

const TabIcon = styled.div`
  width: 29px;
  height: 29px;
  border-radius: 50px;
  background-color: #423d9f;
  margin-right: 10px;
`;

const LogoutBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  cursor: pointer;
  p {
    color: #fff;
    font-size: 21px;
  }
`;

export default Nav;
