import styled from 'styled-components';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CreateNewProject } from '../../redux/slice/postSlice';
import { useNavigate } from 'react-router-dom';

const AddForm = ({ open, onClose, children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      thumbNailNum: 1,
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
          <ModalInner>
            {children}
            <TitleDiv>
              <TitleSpan>파일명</TitleSpan>
              <TitleInput placeholder="기린이의 기획" ref={projectNameRef} />
            </TitleDiv>
            <ButtonDiv>
              <CloseButton onClick={onClose}>닫기</CloseButton>
              <CreateButton onClick={createWorkspace}>생성하기</CreateButton>
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
  width: 480px;
  height: 240px;
`;

const ModalInner = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleSpan = styled.span`
  display: block;
  width: 120px;
  font-weight: bold;
  font-size: 22px;
`;

const TitleInput = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 3px solid #c4c4c4;
  outline: 0;
  background: transparent;
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
  letter-spacing: -0.04em;
  margin: 0 auto;
  &::placeholder {
    color: #bebebe;
  }
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CreateButton = styled.button`
  width: 180px;
  height: 50px;
  border-radius: 40px;
  border: none;
  background-color: #5432d3;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
`;
const CloseButton = styled.button`
  width: 180px;
  height: 50px;
  border-radius: 40px;
  border: 1px solid #5432d3;
  background-color: #fff;
  font-size: 18px;
  color: #5432d3;
`;

export default AddForm;
