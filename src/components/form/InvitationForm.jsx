import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  acceptInvitation,
  declineInvitation,
} from '../../redux/slice/inviteSlice';

const InvitationForm = props => {
  const dispatch = useDispatch();
  const acceptInvitationHandler = () => {
    const sendData = {
      invitingId: props.invitingId,
    };
    dispatch(acceptInvitation(sendData));
  };

  const declineInvitationHandler = () => {
    const sendData = {
      invitingId: props.invitingId,
    };
    dispatch(declineInvitation(sendData));
  };
  const invitation = `${props.yourName}님이 ${props.myName}님을 초대 하셨습니다.`;
  return (
    <NotiDiv>
      <ImgDiv />
      <NotiP>{invitation}</NotiP>

      <RefusingButton onClick={declineInvitationHandler}>거절</RefusingButton>
      <AcceptingButton onClick={acceptInvitationHandler}>수락</AcceptingButton>
    </NotiDiv>
  );
};

const NotiDiv = styled.div`
  width: 222px;
  height: 63px;
`;

const ImgDiv = styled.div`
  background-color: #232323;
`;

const NotiP = styled.p``;

const AcceptingButton = styled.button`
  width: 80px;
  height: 30px;
  background: #5432d3;
  border-radius: 20px;
`;

const RefusingButton = styled.button`
  width: 80px;
  height: 30px;
  background: #c4c4c4;
  border-radius: 20px;
`;

export default InvitationForm;
