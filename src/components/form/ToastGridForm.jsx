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
        <ToastMenu />
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

//@media ${({ theme }) => theme.device.tablet} {}

const Wrapper = styled.div`
  position: relative;
  width: 303px;
  height: 253px;
  cursor: pointer;
`;
const ToastImage = styled.div`
  position: relative;
  background: #909090;
  background-size: cover;
  border-radius: 40px;
  width: 303px;
  height: 180px;
  overflow: hidden;
`;

const ToastTitle = styled.h3`
  position: relative;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: -0.04em;
  top: 12px;
  color: #535353;
`;

const ToastTime = styled.p`
  position: absolute;
  left: 236px;
  top: 200px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.05em;
  color: #d9d9d9;
`;

const ToastMembers = styled.p`
  position: relative;
  top: 9px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.05em;
  color: #d9d9d9;
`;

const ToastMenu = styled.div`
  position: relative;
  left: 238px;
  top: 15px;
  right: 16px;
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
`;

export default ToastGridForm;
