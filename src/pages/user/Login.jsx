import React from 'react';
import styled from 'styled-components';

function Login() {
  const REDIRECT_URI = `http://localhost:3000/member/kakao/callback`;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <>
      <BackgroundImage>
        <BtnWrapper>
          <KaKaoBtn href={KAKAO_AUTH_URL}>카카오 로그인하기</KaKaoBtn>
        </BtnWrapper>
      </BackgroundImage>
    </>
  );
}

const BackgroundImage = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('');
  background-size: cover;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 776px;
  margin-right: auto;
  margin-left: auto;
`;

const KaKaoBtn = styled.a`
  width: 420px;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 34px;
  color: #fff;
  background: #221d7e;
  font-weight: 700;
  font-size: 21px;
  line-height: 31px;
  text-align: center;
  letter-spacing: -0.04em;

  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default Login;
