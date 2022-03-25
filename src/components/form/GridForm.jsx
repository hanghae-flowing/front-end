import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Moment from 'react-moment';
import 'moment/locale/ko';
import { useDispatch } from 'react-redux';
import { OpenWorkSpace } from '../../redux/slice/postSlice';

const ToastGridForm = props => {
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
    navigate(`/toast/${projectId}`, { state: props });
    dispatch(OpenWorkSpace(projectId));
  };

  return (
    <Wrapper>
      <ToastMenu />
      <ToastImage onClick={onClickHandler}></ToastImage>
      <ToastTitle>{projectName}</ToastTitle>
      <ToastTime>{displayCreatedAt(modifiedAt)}</ToastTime>
      <ToastDate>{modifiedAt}</ToastDate>
    </Wrapper>
  );
};

//@media ${({ theme }) => theme.device.tablet} {}

const Wrapper = styled.div`
  position: relative;
  width: 275px;
  height: 247px;
  cursor: pointer;
`;
const ToastImage = styled.div`
  position: relative;
  background: #c4c4c4;
  background-size: cover;
  border-radius: 25px;
  width: 17.2 em;
  height: 11.2em;
  overflow: hidden;
`;

const ToastTitle = styled.h3`
  display: inline-block;
  white-space: nowrap;
  max-width: 147px;
  position: relative;
  font-weight: 400;
  font-size: 21px;
  line-height: 25px;
  top: 16px;
  overflow: hidden;
  color: #818181;
`;

const ToastTime = styled.p`
  position: absolute;
  width: 88px;
  left: 187px;
  top: 198px;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: right;
  color: #c4c4c4;
`;

const ToastDate = styled.p`
  position: relative;
  top: 4px;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #c4c4c4;
`;

const ToastMenu = styled.div`
  position: absolute;
  left: 234px;
  top: 12px;
  right: 12px;
  width: 29px;
  height: 29px;
  background: #fff;
  border-radius: 6px;
  &:hover {
    background: #000;
  }
  z-index: 10;
`;

export default ToastGridForm;
