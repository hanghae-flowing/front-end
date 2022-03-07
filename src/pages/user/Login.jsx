import React from 'react';
import KakaoLogin from 'react-kakao-login';
import styled from 'styled-components';

function Login() {
  return (
    <>
      <BackgroundImage>
        <BtnWrapper>
          <KaKaoBtn
            style={{ width: '300px', height: '50px' }}
            token={String(process.env.REACT_APP_KAKAO_TOKEN)}
            onSuccess={err => {
              console.log('로그인성공', err);
            }}
            onFail={err => {
              console.log('로그인실패', err);
            }}
            onLogout={() => {
              console.log('로그아웃');
            }}
          >
            카카오 로그인
          </KaKaoBtn>
        </BtnWrapper>
      </BackgroundImage>
    </>
  );
}

const BackgroundImage = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('https://hdwallpaperim.com/wp-content/uploads/2017/08/27/136801-city-Paris.jpg');
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

const KaKaoBtn = styled(KakaoLogin)`
  margin: auto;
  display: block;
  border: 1px solid transparent;
  border-radius: 3px;
  color: #783c00;
  background-color: #ffeb00;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default Login;
