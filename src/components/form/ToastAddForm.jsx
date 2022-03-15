import styled from 'styled-components';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CreateNewProject } from '../../redux/slice/postSlice';

const ToastAddForm = ({ open, onClose, children }) => {
  const dispatch = useDispatch();

  const [thumbNailNum, setThumbNailNum] = useState(0);
  const projectNameRef = useRef();

  const createWorkspace = () => {
    const kakaoId = JSON.parse(sessionStorage.getItem('userInfo')).kakaoId;
    const accessToken = JSON.parse(
      sessionStorage.getItem('userInfo'),
    ).accessToken;
    const userId = JSON.parse(sessionStorage.getItem('userInfo')).userId;
    const objectId = 1;

    const sendingData = {
      projectName: projectNameRef.current.value,
      thumbNailNum: thumbNailNum,
      kakaoId,
      accessToken,
      userId,
      objectId,
    };
    dispatch(CreateNewProject(sendingData));
  };
  if (!open) return null;
  else {
    return (
      <Wrapper>
        <Modal>
          <ModalInner>
            {children}
            <div>
              <button onClick={onClose}>close</button>
            </div>

            <TitleDiv>
              <TitleSpan>파일명</TitleSpan>
              <TitleInput placeholder="기존 토스트1" ref={projectNameRef} />
            </TitleDiv>

            <ThumbnailDiv>
              <ThumbnailBox
                onClick={() => {
                  setThumbNailNum(1);
                  console.log(thumbNailNum);
                }}
              />
              <ThumbnailBox
                onClick={() => {
                  setThumbNailNum(2);
                }}
              />
              <ThumbnailBox
                onClick={() => {
                  setThumbNailNum(3);
                }}
              />
              <ThumbnailBox
                onClick={() => {
                  setThumbNailNum(4);
                }}
              />
              <ThumbnailBox
                onClick={() => {
                  setThumbNailNum(5);
                }}
              />
              <ThumbnailBox
                onClick={() => {
                  setThumbNailNum(6);
                }}
              />
              <ThumbnailBox
                onClick={() => {
                  setThumbNailNum(7);
                }}
              />
              <ThumbnailBox
                onClick={() => {
                  setThumbNailNum(8);
                }}
              />
            </ThumbnailDiv>

            <ButtonDiv>
              <CreateButton onClick={createWorkspace}>토스트 굽기</CreateButton>
            </ButtonDiv>
          </ModalInner>
        </Modal>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0);
  z-index: 999;
`;
const Modal = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;
const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 1240px;
  max-width: 1240px;
  height: 678px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const TitleSpan = styled.span`
  font-size: 24px;
`;

const TitleInput = styled.input`
  width: 627px;
  height: 50px;
  border: 0;
  border-bottom: 2px solid black;
  outline: 0;
  background: transparent;
  font-size: 24px;
`;
const ThumbnailDiv = styled.div`
  display: flex;
  margin-top: 89px;
  flex-flow: row wrap;
  justify-content: center;
`;

const ThumbnailBox = styled.div`
  background: #777777;
  width: 264px;
  height: 160px;
  border-radius: 40px;
  margin-right: 18px;
  margin-bottom: 18px;
  zindex: 1005;
  cursor: pointer;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 22px;
`;

const CreateButton = styled.button`
  width: 232px;
  height: 50px;
  border-radius: 40px;
`;

export default ToastAddForm;
