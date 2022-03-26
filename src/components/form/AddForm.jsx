import styled from 'styled-components';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CreateNewProject } from '../../redux/slice/postSlice';
import { useNavigate } from 'react-router-dom';

const ToastAddForm = ({ open, onClose, children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

    dispatch(CreateNewProject({ sendingData, navigate }, { dispatch }));
  };

  if (!open) return null;
  else {
    return (
      <Wrapper>
        <Modal>
          <CloseButton onClick={onClose}>x</CloseButton>

          <ModalInner>
            {children}

            <TitleDiv>
              <TitleSpan>파일명</TitleSpan>
              <TitleInput placeholder="기존 토스트1" ref={projectNameRef} />
            </TitleDiv>
            <ThumbnailDiv>
              <ThumbnailBox
                onClick={() => {
                  setThumbNailNum(1);
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

const CloseButton = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  left: 1167px;
  top: 29px;
  right: 48px;
`;

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
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 40px;
  width: 1240px;
  max-width: 1240px;
  height: 678px;
  margin-top: 158px;
  margin-left: 340px;
  margin-right: 340px;
`;

const ModalInner = styled.div`
  width: 1111px;
  height: 558px;
  margin: 60px 64px;
`;

const TitleDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 909px;
  heihgt: 41px;
  margin-bottom: 40px;
`;

const TitleSpan = styled.span`
  position: relative;
  width: 61px;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.04em;
`;

const TitleInput = styled.input`
  width: 627px;
  height: 41px;
  border: 0;
  border-bottom: 3px solid black;
  outline: 0;
  background: transparent;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.04em;
  margin: 0 auto;
`;
const ThumbnailDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 1111px;
  height: 338px;
  gap: 18px;
  margin-top: 20px;
`;

const ThumbnailBox = styled.div`
  background: #777777;
  width: 264px;
  height: 160px;
  border-radius: 40px;
  zindex: 1005;
  cursor: pointer;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const CreateButton = styled.button`
  width: 232px;
  height: 50px;
  border-radius: 40px;
`;

export default ToastAddForm;
