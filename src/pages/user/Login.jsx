import React from 'react';
import styled from 'styled-components';
import LandingIllustration from '../../assets/images/Illustration-Kirini-Landing.png';
import { ReactComponent as KirinHi } from '../../assets/icons/LoginPageKirin.svg';
import { ReactComponent as BrandName } from '../../assets/icons/BrandName.svg';

function Login() {
  const REDIRECT_URI = `${process.env.REACT_APP_URL}/member/kakao/callback`;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <BackgroundImage>
      <BtnWrapper>
        <ImageWrapper>
          <KirinHi />
        </ImageWrapper>
        <BrandName />
        <StyledP>기획이 처음인 당신을 위한 기획툴</StyledP>
        <KaKaoBtn href={KAKAO_AUTH_URL}>카카오 로그인하기</KaKaoBtn>
      </BtnWrapper>
    </BackgroundImage>
  );
}

const ImageWrapper = styled.div`
  margin-bottom: 38px;
`;

const BackgroundImage = styled.div`
  background: inherit;
  background-position: center;
  width: 100%;
  height: 100%;
  background-image: url(${LandingIllustration});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BtnWrapper = styled.div`
  width: 470px;
  height: 470px;
  display: flex;
  flex-direction: column;
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
  margin-top: 56px;
  background: #221d7e;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 26px;
  color: #ffffff;

  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

const StyledP = styled.p`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 35px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 23px;
  color: #ffffff;

  opacity: 0.4;
`;

export default Login;
