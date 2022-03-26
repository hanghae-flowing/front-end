import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { kakaoLogout } from '../redux/slice/userSlice';
import * as SockJS from 'sockjs-client';
import * as StompJs from '@stomp/stompjs';
import { userInfo } from '../API';
import { sendInvite } from '../redux/slice/inviteSlice';
import { toggleTab } from '../redux/slice/navSlice';

const Header = () => {
  const location = useLocation();
  console.log(location.pathname);
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.user.isLogin);
  const client = useRef({});
  const [email, setEmail] = useState('');

  const handleToggle = () => {
    dispatch(toggleTab());
  };

  const Logout = e => {
    const accessToken =
      sessionStorage.getItem('userInfo') &&
      JSON.parse(sessionStorage.getItem('userInfo')).accessToken;
    dispatch(kakaoLogout(accessToken));
  };

  useEffect(() => {
    if (userInfo) {
      connect();
      return () => disconnect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client.current]);

  const connect = () => {
    client.current = new StompJs.Client({
      // webSocketFactory: () => new SockJS('http://52.79.250.142/websocket'),
      connectHeaders: {
        Accept: 'application/json',
      },
      // debug: function (str) {
      //   console.log(str);
      // },
      onConnect: frame => {
        subscribe();
        // console.log(frame);
      },
      onStompError: frame => {
        console.error(frame);
      },
    });
    client.current.activate();
  };

  const disconnect = () => {
    client.current.deactivate();
  };

  const subscribe = () => {
    client.current.subscribe(`/sub/invite/${userInfo.userId}`, res => {
      res = JSON.parse(res.body);
      console.log(res);
    });
  };

  const inviteHandler = e => {
    setEmail(e.target.value);
    console.log(email);
  };

  const publish = email => {
    if (!client.current.connected) {
      return;
    }
    let content = {
      senderEmail: `${userInfo.Email}`,
      receiverEmail: email,
    };
    client.current.publish({
      destination: `/pub/invite`,
      body: JSON.stringify(content),
    });
    setEmail('');
  };

  const sendInviteHandler = () => {
    publish(email);
    setEmail('');
  };

  if (isLogin) {
    return (
      <HeadBox>
        <div style={{ display: 'flex' }}>
          <MenuBtn onClick={handleToggle}>
            <Line line="0px"></Line>
            <Line line="9px"></Line>
            <Line line="18px"></Line>
          </MenuBtn>
        </div>
        <div style={{ display: 'flex' }}>
          {/* <input type="text" onChange={inviteHandler} value={email} />
          <button
            onClick={() => {
              publish(email);
            }}
          >
            share
          </button> */}
          {/* <LogoutBtn onClick={Logout} to="login">
            Logout
          </LogoutBtn> */}
          {/* <Notification></Notification> */}
          <ProfileImage
            bgImg={isLogin ? `url(${userInfo.ProfileImageURL})` : `none`}
          />
        </div>
      </HeadBox>
    );
  }
  return (
    <HeadBox>
      <MenuBtn onClick={handleToggle}></MenuBtn>
      <LoginBtn to="login">Login</LoginBtn>
    </HeadBox>
  );
};

const HeadBox = styled.div`
  width: 100%;
  height: 45px;
  background-color: #221d7e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  padding: 0 20px;
`;
const MenuBtn = styled.div`
  width: 30px;
  height: 20px;
  cursor: pointer;
  position: relative;
`;

const Line = styled.div`
  width: 30px;
  height: 2px;
  background-color: #fff;
  position: absolute;
  top: ${props => props.line};
  left: 0;
`;

const LoginBtn = styled(Link)`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
`;

const Notification = styled.button`
  backgorund-color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
`;

const ProfileImage = styled.button`
  width: 24px;
  height: 24px;
  backgorund-color: #fff;
  background-image: ${props => props.bgImg};
  background-size: cover;
  border-radius: 50%;
  border: none;
`;

export default Header;
