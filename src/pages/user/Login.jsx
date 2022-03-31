import React from 'react';
import styled from 'styled-components';

function Login() {
  const REDIRECT_URI = "http://hanghae-toaster.s3-website.ap-northeast-2.amazonaws.com";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <BackgroundImage>
      <BtnWrapper>
        <KaKaoBtn href={KAKAO_AUTH_URL}>카카오 로그인하기</KaKaoBtn>
      </BtnWrapper>
    </BackgroundImage>
  );
}

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: inherit;
  width: 100%;
  height: 100vh;
  background-image: url('');
  background-size: cover;
`;

const BtnWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
