import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  acceptInvitation,
  declineInvitation,
} from '../../redux/slice/inviteSlice';

import { ReactComponent as ProfileImage } from '../../assets/icons/ProfileIcon.svg';
import Moment from 'react-moment';

const InvitationForm = props => {
  const dispatch = useDispatch();
  const acceptInvitationHandler = () => {
    const sendData = {
      invitingId: props.invitingId,
    };
    dispatch(acceptInvitation(sendData));
  };

  const displayCreatedAt = createdAt => {
    let startTime = new Date(createdAt);
    let nowTime = Date.now();
    if (parseInt(startTime - nowTime) > -60000) {
      return <Moment format="방금 전">{startTime}</Moment>;
    }
    if (parseInt(startTime - nowTime) < -86400000) {
      return <Moment format="MMM D일">{startTime}</Moment>;
    }
    if (parseInt(startTime - nowTime) > -86400000) {
      return <Moment fromNow>{startTime}</Moment>;
    }
  };

  const declineInvitationHandler = () => {
    const sendData = {
      invitingId: props.invitingId,
    };
    dispatch(declineInvitation(sendData));
  };
  const invitation = `${props.yourName}님이 ${props.myName}님을 '${props.projectName}'에 초대 하셨습니다.`;
  return (
    <>
      <SeperationLine />
      <NotiDiv>
        <Wrapper>
          <ImgDiv>
            <ProfileImage />
          </ImgDiv>
          <div>
            <NotiP>{invitation}</NotiP>
            <DateP>{displayCreatedAt(props.time)}</DateP>
          </div>
        </Wrapper>

        <ButtonDiv>
          <RefusingButton onClick={declineInvitationHandler}>
            거절
          </RefusingButton>
          <AcceptingButton onClick={acceptInvitationHandler}>
            수락
          </AcceptingButton>
        </ButtonDiv>
      </NotiDiv>
    </>
  );
};

const SeperationLine = styled.div`
  border: 1px solid #efefef;
  margin-bottom: 12px;
`;

const DateP = styled.p`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  /* identical to box height */

  display: flex;
  align-items: center;
  margin-top: 1px;
  margin-bottom: 10px;

  color: #c4c4c4;
`;

const Wrapper = styled.div`
  display: flex;
`;

const NotiDiv = styled.div`
  width: 258px;
  height: 93px;
`;

const ImgDiv = styled.div`
  margin-right: 20px;
`;

const NotiP = styled.p`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 17px;
  /* or 142% */

  text-align: justify;

  color: #818181;
`;

const ButtonDiv = styled.div`
  margin-bottom: 10px;
  margin-left: 44px;
  margin-right: 12px;
`;

const AcceptingButton = styled.button`
  height: 27px;
  width: 96px;

  background: #5432d3;
  border-radius: 20px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 13px;
  border: 1px solid #5432d3;

  color: #ffffff;
`;

const RefusingButton = styled.button`
  height: 27px;
  width: 96px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  margin-right: 10px;
  color: #5432d3;
  border: 1px solid #5432d3;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: transparent;
`;

export default InvitationForm;
