import styled from 'styled-components';
import { useSelector } from 'react-redux';
import InvitationForm from '../form/InvitationForm';

const NotificationModal = ({ open, onClose, children }) => {
  const notiList = useSelector(state => state.invite.invitations);
  const myName =
    sessionStorage.getItem('userInfo') &&
    JSON.parse(sessionStorage.getItem('userInfo')).nickname;

  const today = new Date();
  let time = {
    year: today.getFullYear(), //현재 년도
    month: today.getMonth() + 1, // 현재 월
    date: today.getDate(), // 현제 날짜
  };
  let timestring = `${time.year}/${time.month}/${time.date}`;

  if (!open) return null;
  else {
    return (
      <>
        <Modal>
          <NotiTitle>알림</NotiTitle>
          <ShowingDate>{timestring}</ShowingDate>
          {notiList.length > 0 &&
            notiList.map((noti, index) => (
              <InvitationForm
                key={index}
                yourName={noti.inviting}
                myName={myName}
                projectName={noti.projectName}
                invitingId={noti.invitingId}
                time={noti.modifiedAt}
                image={noti.image}
              />
            ))}
        </Modal>
      </>
    );
  }
};

const Modal = styled.div`
  position: fixed;
  right: 22px;
  top: 70px;
  width: 306px;
  min-height: 230px;
  background: #ffffff;
  padding: 24px 29px;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
  border-radius: 20px;

  z-index: 500;
`;

const ShowingDate = styled.p`
  margin-top: 8px;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  color: #c8c8c8;
`;

const NotiTitle = styled.h2`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #818181;
`;

export default NotificationModal;
