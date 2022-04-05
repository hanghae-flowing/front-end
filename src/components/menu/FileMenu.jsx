import styled from 'styled-components';
import { createRef, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBookmark, ThrowProject } from '../../redux/slice/postSlice';
import { useNavigate } from 'react-router-dom';
import { OpenWorkSpace } from '../../redux/slice/postSlice';

const FileMenu = ({
  projectId,
  open,
  onClose,
  children,
  onClickHandler,
  deleteHandler,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!open) return null;
  else {
    return (
      <>
        <ModalDiv>
          <ListDiv>
            <ListName onClick={onClickHandler}>열기</ListName>
          </ListDiv>

          <ListDiv>
            <SeperationLine />
            <Delete onClick={deleteHandler}>삭제</Delete>
          </ListDiv>
        </ModalDiv>
      </>
    );
  }
};

const SeperationLine = styled.div`
  border: 1px solid #fbfbfb;
`;

const Delete = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #b96363;
`;

const ListName = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #818181;
`;

const ListDiv = styled.div`
  width: 94.89px;
  height: 38px;
`;

const ModalDiv = styled.div`
  position: absolute;
  width: 122px;
  height: 100px;
  top: 50px;
  right: 5px;
  padding: 21px 16px;
  background: #ffffff;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
`;

export default FileMenu;
