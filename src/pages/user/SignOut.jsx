import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as KirinBye } from '../../assets/icons/KirinBye.svg';
import { kakaoLogout } from '../../redux/slice/userSlice';

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
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: inherit;
  background-position: center;
  width: 100%;
  height: 100%;
  background-image: url();
  background-size: cover;
`;

const BtnWrapper = styled.div`
  width: 470px;
  height: 470px;
  display: flex;
  margin: 15% auto 0 auto;
  flex-wrap: wrap;
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
const StyledH = styled.h3`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 36px;

  color: #5432d3;
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
  margin-top: 29px;

  color: #7a7a7a;

  opacity: 0.4;
`;

export default SignOut;
