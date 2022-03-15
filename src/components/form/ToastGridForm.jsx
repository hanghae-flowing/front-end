import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Moment from 'react-moment';
import 'moment/locale/ko';

const ToastGridForm = props => {
  const { projectName, modifiedAt, memberList, bookmark, thumbnailNum } = props;

  const navigate = useNavigate();

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
    navigate('/toast');
  };

  return (
    <Wrapper onClick={onClickHandler}>
      <ToastImage>
        <ToastBookmark />
      </ToastImage>
      <ToastTitle>{projectName}</ToastTitle>
      <ToastTime>{displayCreatedAt(modifiedAt)}</ToastTime>
      <ToastMembers>
        이한솔
        {/* {memberList &&
          memberList.map((member, index) => <span key={index}>{member} </span>)} */}
      </ToastMembers>
    </Wrapper>
  );
};

ToastGridForm.defaultProps = {
  projectName: '프로젝트 이름',
  modifiedAt: '1시간전',
  memberList: '이한솔, 이주현',
  thumbnailNum: '1',
  bookmark: 'false',
};

const Wrapper = styled.div`
  margin-right: 20px;
  margin-top: 60px;
  display: grid;
  position: relative;
  flex-wrap: wrap;
  width: 303px;
  height: 253px;
  cursor: pointer;

  @media ${({ theme }) => theme.device.tablet} {
    width: 155px;
    height: 135px;
  }
`;
const ToastImage = styled.div`
  background: #909090;
  background-size: cover;
  border-radius: 40px;
  width: 303px;
  height: 180px;
  overflow: hidden;

  @media ${({ theme }) => theme.device.tablet} {
    width: 154px;
    height: 96px;
    boerder-radius: 23px;
  }
`;

const ToastTitle = styled.h3`
  position: relative;
  top: 12px;
  font-size: 28px;
  color: #535353;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 14px;
    top: 7px;
  }
`;

const ToastTime = styled.p`
  position: absolute;
  left: 242px;
  top: 200px;
  font-size: 16px;
  color: #d9d9d9;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 12px;
    top: 107px;
    left: 116px;
  }
`;

const ToastMembers = styled.p`
  position: relative;
  top: 8px;
  font-size: 16px;
  color: #d9d9d9;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 8px;
    top: 4px;
  }
`;

const ToastBookmark = styled.div`
  position: relative;
  left: 238px;
  top: 15px;
  right: 16px;
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;

  @media ${({ theme }) => theme.device.tablet} {
    width: 26px;
    height: 25px;
    top: 9px;
    left: 119px;
    right: 9px;
  }
`;

export default ToastGridForm;
