import { useSelector } from 'react-redux';
import styled from 'styled-components';
import NegativeButton from '../elements/NegativeButton';
import PositiveButton from '../elements/PositiveButton';

const DeleteModal = ({ open, onClose, onClickHandler, deletion }) => {
  const counting = useSelector(state => state.trash.counting);
  const recoverString = `총 ${counting}개 항목을 복원하시겠습니까?`;
  const secondRecoverString = '해당 항목은 삭제 전 경로로 복원됩니다.';

  const deletionString = `총 ${counting}개 항목을 삭제하시겠습니까?`;
  const secondDeletionString =
    '해당 항목은 영구적으로 삭제되며 복원이 불가합니다.';
  if (!open) return null;
  else {
    return (
      <Wrapper>
        <Modal>
          <FirstP>{deletion === true ? deletionString : recoverString}</FirstP>
          <SecondP>
            {deletion === true ? secondDeletionString : secondRecoverString}
          </SecondP>
          <NegativeButton
            text={'취소'}
            onClickHandler={() => {
              onClose();
            }}
          />
          <PositiveButton
            text={deletion === true ? '삭제하기' : '복원하기'}
            onClickHandler={onClickHandler}
          />
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
  font-size: 17px;
  line-height: 23px;
  /* identical to box height */

  display: flex;
  margin: 9px auto 30px auto;
  justify-content: center;
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
  border-radius: 30px;
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
  z-index: 500;
`;

export default DeleteModal;
