import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { checkNameByEmail, sendInvite } from '../../redux/slice/inviteSlice';
import NegativeButton from '../elements/NegativeButton';
import PositiveButton from '../elements/PositiveButton';
import InvitationSecondModal from './InvitationSecondModal';

const InvitationModal = ({ open, onClose }) => {
  const dispatch = useDispatch();

  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const emailToSendInvitationRef = useRef();

  // const checkNameByEmailHandler = () => {
  //   setIsSecondModalOpen(true);

  //   const sendingData = {
  //     email: emailToSendInvitationRef.current.value,
  //   };
  //   dispatch(checkNameByEmail(sendingData));
  // };

  const projectId =
    sessionStorage.getItem('projectInfo') &&
    JSON.parse(sessionStorage.getItem('projectInfo')).projectInfo.projectId;

  const invitationHandler = () => {
    const userId = JSON.parse(sessionStorage.getItem('userInfo')).userId;

    const invitationData = {
      projectId,
      userId,
      email: emailToSendInvitationRef.current.value,
    };
    console.log(invitationData);
    dispatch(sendInvite(invitationData));

    // 초대할사람이메일 초대한사람유저아이디 프로젝트아이디
  };

  if (!open) return null;
  else {
    return (
      <Wrapper>
        <Modal>
          <FirstP>해당 프로젝트를 공유하시겠습니까?</FirstP>
          <SecondP>초대하시려는 사용자의 이메일주소를 입력해주세요.</SecondP>
          <InputDiv>
            <ThirdP>이메일</ThirdP>
            <InputBox
              ref={emailToSendInvitationRef}
              placeholder="email.address@kirin.com"
            ></InputBox>
          </InputDiv>

          <ButtonDiv>
            <NegativeButton
              onClickHandler={() => {
                onClose();
              }}
              text={'취소'}
            ></NegativeButton>
            <PositiveButton
              text={'초대하기'}
              onClickHandler={invitationHandler}
            ></PositiveButton>
          </ButtonDiv>
        </Modal>
      </Wrapper>
    );
  }
};

const FirstP = styled.p`
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  /* identical to box height */
  margin-left: 87px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #767676;
`;

const SecondP = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  /* identical to box height */
  margin-top: 9px;
  margin-left: 59px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #bebebe;
`;

const InputDiv = styled.div`
  width: 100%;
  margin-top: 37px;
  margin-left: 59px;
`;

const ThirdP = styled.span`
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  /* identical to box height */

  color: #767676;
`;

const InputBox = styled.input`
  height: 26.88820457458496px;
  width: 248px;
  color: #bebebe;
  margin-left: 67px;
`;

const ButtonDiv = styled.div`
  margin: 66.11px 50px 40px 50px;
`;

const Modal = styled.div`
  width: 480px;
  height: 340px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 31px;
  padding-top: 60px;

  z-index: 60;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(74, 74, 74, 0.75);
  display: flex;
  justify-content: center;
  align-content: center;
  padding-top: 300px;
  z-index: 50;
`;

export default InvitationModal;
