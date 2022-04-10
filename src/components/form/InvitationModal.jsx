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
    dispatch(sendInvite(invitationData)).then(res => console.log(res));

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
  /* identical to box height */
  display: flex;
  align-items: center;
  text-align: center;
  color: #767676;
  padding-bottom: 20px;
`;

const SecondP = styled.p`
  font-weight: 400;
  font-size: 18px;
  /* identical to box height */
  display: flex;
  align-items: center;
  text-align: center;
  color: #bebebe;
  padding-bottom: 40px;
`;

const InputDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 60px;
`;

const ThirdP = styled.span`
  height: 30px;
  font-weight: 700;
  font-size: 22px;
  /* identical to box height */
  color: #767676;
  padding-right: 40px;
  flex-shrink: 0;
`;

const InputBox = styled.input`
  height: 30px;
  width: 100%;
  border: none;
  border-bottom: 2px solid #bebebe;
  font-size: 18px;
  color: #222;
  &::placeholder {
    color: #bebebe;
  }
`;

const ButtonDiv = styled.div``;

const Modal = styled.div`
  width: 480px;
  height: 340px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 31px;
  z-index: 60;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
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
