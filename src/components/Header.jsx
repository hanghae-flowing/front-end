import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as SockJS from 'sockjs-client';
import * as StompJs from '@stomp/stompjs';
import { userInfo } from '../API';
import { sendInvite } from '../redux/slice/inviteSlice';
import { toggleTab } from '../redux/slice/navSlice';
import { ReactComponent as NotiImg } from '../assets/icons/Bell_light.svg';
import { ReactComponent as SaveImg } from '../assets/icons/Save_light.svg';
import { ReactComponent as BackImg } from '../assets/icons/Back_light.svg';
import { ReactComponent as ReturnImg } from '../assets/icons/Return_light.svg';
import { ReactComponent as OutImg } from '../assets/icons/Out_light.svg';
import { ReactComponent as LoginImg } from '../assets/icons/Sign_in.svg';
import PopupMenu from './PopupMenu';

export const MainHeader = () => {
  const location = useLocation();
  console.log(location.pathname);
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.user.isLogin);
  const client = useRef({});
  const [email, setEmail] = useState('');

  const handleToggle = () => {
    dispatch(toggleTab());
  };

  // useEffect(() => {
  //   if (userInfo) {
  //     connect();
  //     return () => disconnect();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [client.current]);

  // const connect = () => {
  //   client.current = new StompJs.Client({
  //     webSocketFactory: () => new SockJS('http://52.79.250.142/websocket'),
  //     connectHeaders: {
  //       Accept: 'application/json',
  //     },
  //     // debug: function (str) {
  //     //   console.log(str);
  //     // },
  //     onConnect: frame => {
  //       subscribe();
  //       // console.log(frame);
  //     },
  //     onStompError: frame => {
  //       console.error(frame);
  //     },
  //   });
  //   client.current.activate();
  // };

  // const disconnect = () => {
  //   client.current.deactivate();
  // };

  // const subscribe = () => {
  //   client.current.subscribe(`/sub/invite/${userInfo.userId}`, res => {
  //     res = JSON.parse(res.body);
  //     console.log(res);
  //   });
  // };

  // const inviteHandler = e => {
  //   setEmail(e.target.value);
  //   console.log(email);
  // };

  // const publish = email => {
  //   if (!client.current.connected) {
  //     return;
  //   }
  //   let content = {
  //     senderEmail: `${userInfo.Email}`,
  //     receiverEmail: email,
  //   };
  //   client.current.publish({
  //     destination: `/pub/invite`,
  //     body: JSON.stringify(content),
  //   });
  //   setEmail('');
  // };

  // const sendInviteHandler = () => {
  //   publish(email);
  //   setEmail('');
  // };

  if (isLogin) {
    return (
      <HeadBox>
        <FlexDiv>
          <MenuBtn onClick={handleToggle}>
            <Line line="0px"></Line>
            <Line line="7px"></Line>
            <Line line="14px"></Line>
          </MenuBtn>
        </FlexDiv>
        <FlexDiv>
          <Notification>
            <NotiImg />
          </Notification>
        </FlexDiv>
      </HeadBox>
    );
  }
  return (
    <HeadBox>
      <MenuBtn onClick={handleToggle}>
        <Line line="0px"></Line>
        <Line line="7px"></Line>
        <Line line="14px"></Line>
      </MenuBtn>
      <LoginBtn to="login">
        <LoginImg />
      </LoginBtn>
    </HeadBox>
  );
};

export const WorkHeader = props => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <HeadBox>
      {isOpen ? <PopupMenu /> : null}
      <FlexDiv align="center">
        <MenuBtn onClick={() => setIsOpen(!isOpen)}>
          <Line line="0px"></Line>
          <Line line="7px"></Line>
          <Line line="14px"></Line>
        </MenuBtn>
        <Buttons>
          <SaveImg />
        </Buttons>
        <Buttons onClick={() => navigate(-1)}>
          <BackImg />
        </Buttons>
        <Buttons onClick={() => navigate(+1)}>
          <ReturnImg />
        </Buttons>
      </FlexDiv>
      <FlexDiv justify="center">
        <ProjectTitle>{props.title}</ProjectTitle>
      </FlexDiv>
      <FlexDiv justify="end">
        <Notification>
          <NotiImg />
        </Notification>
        <Buttons onClick={() => navigate('/main')}>
          <OutImg />
        </Buttons>
      </FlexDiv>
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
  z-index: 1000;
  padding: 0 20px;
`;
const FlexDiv = styled.div`
  display: flex;
  justify-content: ${props => props.justify};
  align-items: center;
  flex-grow: 1;
  flex-basis: 100%;
`;
const MenuBtn = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  cursor: pointer;
`;

const Line = styled.div`
  width: 21px;
  height: 1px;
  background-color: #fff;
`;

const LoginBtn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Notification = styled.div`
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ProjectTitle = styled.div`
  color: #fff;
  font-size: 21px;
  font-weight: 400;
`;
