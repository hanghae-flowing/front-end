import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as KirinBye } from '../../assets/icons/KirinBye.svg';
import { kakaoLogout } from '../../redux/slice/userSlice';
import SignoutImg from '../../assets/images/bg_sign_out.png';

const SignOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const accessToken =
    sessionStorage.getItem('userInfo') &&
    JSON.parse(sessionStorage.getItem('userInfo')).accessToken;

  const Logout = () => {
    dispatch(kakaoLogout(accessToken)).then(() => {
      navigate('/login');
    });
  };

  return (
    <BackgroundImage>
      <BtnWrapper>
        <ImageWrapper>
          <KirinBye />
        </ImageWrapper>
        <StyledH>로그아웃 하시겠습니까?</StyledH>
        <StyledP>다음에 또 만나요!</StyledP>
        <KaKaoBtn onClick={Logout}>로그아웃하기</KaKaoBtn>
      </BtnWrapper>
    </BackgroundImage>
  );
};

const ImageWrapper = styled.div`
  margin-bottom: 38px;
`;

const BackgroundImage = styled.div`
  background: inherit;
  background-position: center;
  width: 100%;
  height: 100%;
  background-image: url(${SignoutImg});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BtnWrapper = styled.div`
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
  background: #5432d3;
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
const StyledH = styled.h3`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 45px;
  /* identical to box height */
  display: flex;
  align-items: center;
  text-align: center;
  color: #e3e0ff;
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
  color: #afa4ff;
`;

export default SignOut;
