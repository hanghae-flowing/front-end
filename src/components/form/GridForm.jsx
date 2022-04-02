import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import 'moment/locale/ko';
import { useDispatch } from 'react-redux';
import { OpenWorkSpace } from '../../redux/slice/postSlice';
import FileMenu from '../menu/FileMenu';

const ToastGridForm = props => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    projectName,
    modifiedAt,
    memberList,
    bookmark,
    thumbnailNum,
    projectId,
  } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const onClickHandler = () => {
    navigate(`/workspace/${projectId}`, { state: props });
    dispatch(OpenWorkSpace(projectId));
  };

  return (
    <Wrapper>
      <ToastMenu onClick={() => setIsOpen(true)} />
      <ToastImage onClick={onClickHandler}></ToastImage>
      <ToastTitle>{projectName}</ToastTitle>
      <ToastDate>{displayCreatedAt(modifiedAt)}</ToastDate>
      <FileMenu
        projectId={projectId}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </Wrapper>
  );
};

//@media ${({ theme }) => theme.device.tablet} {}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 26%;
  cursor: pointer;
`;
const ToastImage = styled.div`
  position: relative;
  background: #c4c4c4;
  background-size: cover;
  border-radius: 25px;
  width: 100%;
  height: 150px;
  overflow: hidden;
  margin-right: 25px;
`;

const ToastTitle = styled.h3`
  display: inline-block;
  white-space: nowrap;
  max-width: 147px;
  position: relative;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.7em;
  top: 0.5em;
  overflow: hidden;
  color: #818181;
`;

const ToastDate = styled.p`
  position: relative;
  top: 0.4em;
  font-weight: 400;
  font-size: 1.1em;
  line-height: 1.3em;
  color: #c4c4c4;
`;

const ToastMenu = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 24px;
  height: 24px;
  background: #fff;
  border-radius: 6px;
  &:hover {
    background: #000;
  }
  z-index: 10;
`;

export default ToastGridForm;
