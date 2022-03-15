import styled from 'styled-components';

const MyToast = () => {
  return (
    <Wrapper>
      <Title>마이토스트</Title>

      <UserDiv>
        <ProfileImage />
        <Name>이한솔</Name>
        <UserEmail>eeee@eeee.com</UserEmail>
      </UserDiv>
      <div>전체</div>
      <div>목록</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1920px;
`;
const Title = styled.h3`
  margin-top: 164px;
  margin-left: 323px;
  font-size: 36px;
  width: 156px;
  height: 43px;
  font-weight: 500;
`;

const UserDiv = styled.div`
  width: 322px;
  height: 183px;
  margin-top: 164px;
  margin-left: 323px;
`;

const ProfileImage = styled.div`
  background-color: #777777;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 40px;
  margin-left: 323px;
`;

const Name = styled.p`
  font-size: 28px;
`;

const UserEmail = styled.p``;

export default MyToast;
