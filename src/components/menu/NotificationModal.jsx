import styled from 'styled-components';
import { useSelector } from 'react-redux';
import InvitationForm from '../form/InvitationForm';

const NotificationModal = ({ open, onClose, children }) => {
  const notiList = useSelector(state => state.invite.invitations);
  const myName = JSON.parse(sessionStorage.getItem('userInfo')).nickname;

  if (!open) return null;
  else {
    return (
      <>
        <TriangleForStyle />
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
          <button onClick={onClose}>닫기</button>
        </Modal>
      </>
    );
  }
};

const Modal = styled.div`
  position: fixed;
  right: 22px;
  top: 70px;
  width: 270px;
  height: 716px;
  background: #ffffff;
  padding: 24px 29px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  z-index: 500;
`;

const TriangleForStyle = styled.div`
  position: fixed;
  width: 0;
  height: 0;
  right: 36px;
  top: 54px;
  border-bottom: 20px solid #fff;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  z-index: 600;
`;
const NotiTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #818181;
`;

export default NotificationModal;
