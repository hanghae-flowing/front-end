import styled from 'styled-components';
import { useSelector } from 'react-redux';
import InvitationForm from '../form/InvitationForm';

const NotificationModal = () => {
  const notiList = useSelector(state => state.invite.invitations);
  const myName = JSON.parse(sessionStorage.getItem('userInfo')).nickname;

  return (
    <Modal>
      <NotiTitle>알림</NotiTitle>
      {notiList.length > 0 &&
        notiList.map((noti, index) => (
          <InvitationForm
            key={index}
            yourName={noti.inviting}
            myName={myName}
            invitingId={noti.invitingId}
          />
        ))}
    </Modal>
  );
};

const Modal = styled.div`
  width: 270px;
  height: 716px;
  background: #ffffff;
  padding: 24px 29px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

const NotiTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #818181;
`;

export default NotificationModal;
