import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import NotificationModal from '../components/menu/NotificationModal';
import {
  checkMyInvitation,
  acceptInvitation,
  declineInvitation,
} from '../redux/slice/inviteSlice';
import { switchPage } from '../redux/slice/navSlice';

const Notice = () => {
  const dispatch = useDispatch();

  const checkMyInvitationHandler = () => {
    const checkData = {
      userId: JSON.parse(sessionStorage.getItem('userInfo')).userId,
    };
    dispatch(checkMyInvitation(checkData));
  };

  const acceptInvitationHandler = () => {
    const sendData = {
      invitingId: sessionStorage.getItem('invitingInfo').data.invitingId,
    };
    dispatch(acceptInvitation(sendData));
  };

  const declineInvitationHandler = () => {
    const sendData = {
      invitingId: sessionStorage.getItem('invitingInfo').data.invitingId,
    };
    dispatch(declineInvitation(sendData));
  };

  return (
    <Wrapper>
      <NotificationModal></NotificationModal>
      <Button onClick={checkMyInvitationHandler}>hahaha</Button>
      <button onClick={acceptInvitationHandler}>수락</button>
      <button onClick={declineInvitationHandler}>거절</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 200px 200px;
`;

const Button = styled.button`
  width: 500px;
  height: 500px;
`;

export default Notice;
