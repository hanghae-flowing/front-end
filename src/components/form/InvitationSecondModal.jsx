import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { sendInvite } from '../../redux/slice/inviteSlice';
import MainModalForm from './MainModalForm';

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
        <MainModalForm></MainModalForm>
      </>
    );
  }
};

export default InvitationSecondModal;
