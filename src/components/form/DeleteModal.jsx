import { useState } from 'react';
import styled from 'styled-components';
import NegativeButton from './elements/NegativeButton';
import PositiveButton from './elements/PositiveButton';

const DeleteModal = ({ open, onClose, onClickHandler }) => {
  const [counting, setCounting] = useState();
  if (!open) return null;
  else {
    return (
      <Wrapper>
        <Modal>
          <FirstP>총 5개 항목을 복원하시겠습니까?</FirstP>
          <SecondP>해당 항목은 삭제 전 경로로 복원됩니다.</SecondP>
          <NegativeButton
            onClickHandler={() => {
              onClose();
            }}
          />
          <PositiveButton onClickHandler={onClickHandler} />
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
  margin-left: 38px;
  margin-right: 38px;

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

  display: flex;
  margin: 9px 95px 0 95px;
  align-items: center;
  text-align: center;

  color: #bebebe;
`;

const Modal = styled.div`
  height: 240px;
  width: 480px;
  background: #ffffff;
  padding: 60px 50px 40px 50px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 3000px;
`;

const Wrapper = styled.div`
  width: 1920px;
  height: 1032px;
  background: rgba(74, 74, 74, 0.75);
  display: flex;
  justify-content: center;
  align-content: center;
  padding-top: 300px;
  z-index: 500;
`;

export default DeleteModal;
