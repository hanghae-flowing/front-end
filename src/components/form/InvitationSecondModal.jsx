import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { sendInvite } from '../../redux/slice/inviteSlice';
import HelloFromKirin from '../../assets/images/KirinHi.png';
import NegativeButton from '../elements/NegativeButton';
import PositiveButton from '../elements/PositiveButton';

const InvitationSecondModal = ({ open, onClose, email }) => {
  const dispatch = useDispatch();

  const projectId =
    sessionStorage.getItem('projectInfo') &&
    JSON.parse(sessionStorage.getItem('projectInfo')).projectInfo.projectId;

  const invitationHandler = () => {
    const userId = JSON.parse(sessionStorage.getItem('userInfo')).userId;

    const invitationData = {
      projectId,
      userId,
      email,
    };
    console.log(invitationData);
    dispatch(sendInvite(invitationData));
    // 초대할사람이메일 초대한사람유저아이디 프로젝트아이디
  };
  if (!open) return null;
  else {
    return (
      <>
        <Modal>
          <NegativeButton text="취소" />
          <PositiveButton text="초대하기" />
        </Modal>
      </>
    );
  }
};

const ImageDiv = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-image; url(${HelloFromKirin});
  background-size: cover;
`;

const Modal = styled.div`
  width: 480px;
  height: 340px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 31px;
`;

export default InvitationSecondModal;
