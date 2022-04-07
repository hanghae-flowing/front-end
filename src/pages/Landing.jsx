import React from 'react';
import LandingIllustration from '../assets/images/Illustration-Kirini-Landing.png';
import LandingImg from '../assets/images/Landing.jpeg';
import { ReactComponent as BrandName } from '../assets/icons/BrandName.svg';
import { ReactComponent as KiriniCap } from '../assets/icons/Kirini_cap.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  return (
    <StyledWrap>
      <StyledDiv>
        <KiriniWrap>
          <KiriniCap />
        </KiriniWrap>
        <BrandName />
        <StyledP>기획이 처음인 당신을 위한 기획툴</StyledP>
        <LoginBtn onClick={() => navigate('/login')}>로그인 하기</LoginBtn>
      </StyledDiv>
      <ImageDiv>
        <img src={LandingImg} alt="기린이의 기획" />
      </ImageDiv>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${LandingIllustration});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const ImageDiv = styled.div`
  width: 100%;
  height: 100%;
  & img {
    width: 100%;
  }
`;

const KiriniWrap = styled.div`
  margin-bottom: 20px;
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
  color: #ffffff;
  opacity: 0.4;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const LoginBtn = styled.button`
  width: 420px;
  height: 68px;
  background-color: #4929c1;
  border-radius: 50px;
  border: none;
  font-size: 21px;
  color: #fff;
  font-weight: normal;
`;

export default Landing;
