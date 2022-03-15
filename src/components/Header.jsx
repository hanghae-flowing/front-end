import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { kakaoLogout } from '../redux/slice/userSlice';

const Header = ({ isLogin }) => {
  const dispatch = useDispatch();

  const Logout = e => {
    const accessToken =
      localStorage.getItem('userInfo') &&
      JSON.parse(localStorage.getItem('userInfo')).accessToken;

    dispatch(kakaoLogout(accessToken));
  };

  if (isLogin) {
    return (
      <HeadBox>
        <HomeBtn to="main">home</HomeBtn>
        <SearchBox>
          <InputBox>
            <Input type={'text'} placeholder="검색" />
          </InputBox>
        </SearchBox>
        <LoginBtn onClick={Logout} to="login">
          Logout
        </LoginBtn>
      </HeadBox>
    );
  }
  return (
    <HeadBox>
      <HomeBtn to="main">home</HomeBtn>
      <SearchBox>
        <InputBox>
          <Input type={'text'} placeholder="검색" />
        </InputBox>
      </SearchBox>
      <LoginBtn to="login">Login</LoginBtn>
    </HeadBox>
  );
};

const HeadBox = styled.div`
  width: 100%;
  height: 84px;
  background-color: #dadada;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
`;
const HomeBtn = styled(Link)`
  border-radius: 8px;
  background-color: #9e9e9e;
  width: 80px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 18px;
`;

const LoginBtn = styled(Link)`
  border-radius: 8px;
  background-color: #9e9e9e;
  width: 80px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 18px;
`;
const SearchBox = styled.div`
  max-width: 1280px;
  flex-grow: 1;
`;

const InputBox = styled.div`
  width: 304px;
  height: 50px;
  background-color: #e7e7e7;
  border-radius: 60px;
`;

const Input = styled.input`
  height: 50px;
  width: 100%;
  border: none;
  background: none;
  font-size: 18px;
  padding: 0 20px;
  &:focus {
    outline: none;
  }
`;

export default Header;
