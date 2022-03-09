import styled from 'styled-components';

const ToastGridForm = () => {
  return (
    <Wrapper>
      <ToastImage>
        <ToastBookmark />
      </ToastImage>
      <ToastTitle>기존 토스트1</ToastTitle>
      <ToastTime>time</ToastTime>
      <ToastMembers>이한솔, 이주현</ToastMembers>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 15px 10px 7px 10px;
  display: grid;
  position: relative;
  flex-wrap: wrap;
  width: 303px;
  height: 257px;
  cursor: pointer;
`;
const ToastImage = styled.div`
  background: #909090;
  border-radius: 10px;
  width: 300px;
  height: 180px;
`;

const ToastTitle = styled.h3`
  margin-top: 3px;
  font-size: 15px;
  color: #535353;
`;

const ToastTime = styled.p`
  font-size: 7px;
  color: #d9d9d9;
`;

const ToastMembers = styled.p`
  font-size: 10px;
  color: #d9d9d9;
`;

const ToastBookmark = styled.div`
  width: 50px;
  height: 50px;
  margin: 2% 2% 0 80%;
  background-color: #fff;
  border-radius: 50%;
`;

export default ToastGridForm;
