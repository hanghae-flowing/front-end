import React from 'react';
import KakaoLogin from 'react-kakao-login';
import styled from 'styled-components';

function Login() {
  return (
    <>
      <div>
        <h1>카카오톡 간편로그인</h1>
        <br />
        <KaKaoBtn
          token={String('6fbc2e5aa94d488c058f25c8a101c639')}
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
      </div>

      <div>
        <img
          src="https://www.popsci.com/uploads/2020/06/05/3NIEQB3SFVCMNHH6MHZ42FO6PA.jpg?auto=webp"
          alt=""
        />
      </div>
    </>
  );
}

const KaKaoBtn = styled(KakaoLogin)`
  padding: 0;
  width: 190px;
  height: 44px;
  line-height: 44px;
  color: #783c00;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default Login;
