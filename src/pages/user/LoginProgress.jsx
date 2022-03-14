import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { kakaoLogin } from '../../redux/slice/userSlice';
import Main from '../Main';

const LoginProgress = props => {
  const dispatch = useDispatch();

  const code = new URL(window.location.href).searchParams.get('code');
  console.log(code);

  useEffect(() => {
    dispatch(kakaoLogin(code));
  }, [dispatch]);

  return <Main />;
};

export default LoginProgress;
