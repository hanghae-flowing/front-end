import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

//https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code
function Login() {
  const navigate = useNavigate();

  const CLIENT_ID = process.env.REACT_APP_REST_API;
  const REDIRECT_URI = 'http://localhost:3000/member/kakao/callback';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const onLogin = e => {};

  return (
    <>
      <BackgroundImage>
        <BtnWrapper>
          <KaKaoBtn href={KAKAO_AUTH_URL} onClick={onLogin}>
            카카오 로그인하기
          </KaKaoBtn>
        </BtnWrapper>
      </BackgroundImage>
    </>
  );
}

const BackgroundImage = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('https://makcreates.com/wp-content/uploads/2018/03/black-background-mak-creates-web-design-services-1500-2500.jpg');
  background-size: cover;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  min-height: 100vh;
  width: 20%;
`;

const KaKaoBtn = styled.a`
  width: 300px;
  height: 50px;
  margin: auto;
  display: block;
  border: 1px solid transparent;
  border-radius: 3px;
  color: #1e1926;
  background-color: #ffeb00;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default Login;
