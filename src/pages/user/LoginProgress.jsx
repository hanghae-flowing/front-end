import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { kakaoLogin } from '../../redux/slice/userSlice';
import Main from '../Main';

const LoginProgress = props => {
  const dispatch = useDispatch();

  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(async () => {
    await dispatch(kakaoLogin(code));
  }, [dispatch]);

  return <Main />;
};

export default LoginProgress;
