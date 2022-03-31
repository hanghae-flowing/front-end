import styled from 'styled-components';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CreateNewProject } from '../../redux/slice/postSlice';
import { useNavigate } from 'react-router-dom';

const AddForm = ({ open, onClose, children }) => {
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

    dispatch(CreateNewProject({ sendingData, navigate }));
  };

  if (!open) return null;
  else {
    return (
      <Wrapper>
        <Modal>
          <CloseButton onClick={onClose}>닫기</CloseButton>

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
  right: 20px;
  top: 20px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9999;
`;

const Modal = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 25px;
  width: 700px;
  height: 500px;
`;

const ModalInner = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const TitleSpan = styled.span`
  display: block;
  width: 100px;
  font-weight: 600;
  font-size: 24px;
`;

const TitleInput = styled.input`
  width: 100%;
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
  width: 100%;
  height: 220px;
  gap: 10px;
`;

const ThumbnailBox = styled.div`
  background: #777777;
  border-radius: 10px;
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
  border: none;
`;

export default AddForm;
