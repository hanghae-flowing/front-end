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
    navigate(`/workspace/${projectId}`, { state: props });
    dispatch(OpenWorkSpace(projectId));
  };

  return (
    <Wrapper>
      <ToastMenu />
      <ToastImage onClick={onClickHandler}></ToastImage>
      <ToastTitle>{projectName}</ToastTitle>
      <ToastDate>{displayCreatedAt(modifiedAt)}</ToastDate>
    </Wrapper>
  );
};

//@media ${({ theme }) => theme.device.tablet} {}

const Wrapper = styled.div`
  position: relative;
  width: 94%;
  height: 26%;
  cursor: pointer;
`;
const ToastImage = styled.div`
  position: relative;
  background: #c4c4c4;
  background-size: cover;
  border-radius: 25px;
  width: 230px;
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
  left: 70%;
  top: 6%;
  width: 24px;
  height: 24px;
  background: #fff;
  border-radius: 6px;
  &:hover {
    background: #000;
  }
  z-index: 10;
  @media ${({ theme }) => theme.device.middle} {
    left: 75%;
  }
  @media ${({ theme }) => theme.device.tablet} {
    left: 63%;
  }
`;

export default ToastGridForm;
