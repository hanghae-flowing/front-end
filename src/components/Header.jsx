import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { kakaoLogout } from '../redux/slice/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector(state => state.user.isLogin);

  const ToMyToast = () => {
    navigate('/mytoast');
  };

  const Logout = e => {
    const accessToken =
      sessionStorage.getItem('userInfo') &&
      JSON.parse(sessionStorage.getItem('userInfo')).accessToken;
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
        <LogoutBtn onClick={Logout} to="login">
          Logout
        </LogoutBtn>
        <Notification></Notification>
        <ProfileImage onClick={ToMyToast} />
      </HeadBox>
    );
  }
  return (
    <HeadBox>
      <HomeBtn to="/">home</HomeBtn>
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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
`;
const HomeBtn = styled(Link)`
  width: 56.97px;
  height: 40px;
  left: 20.88px;
  top: 21px;
  background-color: #9e9e9e;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 18px;
`;

const LoginBtn = styled(Link)`
  position: absolute;
  width: 100px;
  height: 50px;
  left: 1800px;
  top: 17px;

  border-radius: 25px;
  background-color: #9e9e9e;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
`;

const LogoutBtn = styled(Link)`
  position: absolute;

  width: 96px;
  height: 50px;
  left: 1664px;
  top: 17px;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  color: #fff;
  border-radius: 25px;
  background-color: #9e9e9e;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchBox = styled.div`
  position: absolute;
  width: 304px;
  height: 50px;
  left: 323px;
  top: 17px;
`;

const InputBox = styled.div`
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

const Notification = styled.button`
  backgorund-color: #fff;
  position: absolute;
  width: 50px;
  height: 50px;
  left: 1780px;
  top: 17px;
  border-radius: 50%;
`;

const ProfileImage = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  left: 1850px;
  top: 17px;
  backgorund-color: #fff;
  border-radius: 50%;
`;

export default Header;
