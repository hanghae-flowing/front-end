import React, { useEffect } from 'react';
import AppRouter from './router/AppRouter';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { useDispatch } from 'react-redux';
import { setLogin } from './redux/slice/userSlice';

function App() {
  const dispatch = useDispatch();

  const mytoken = sessionStorage.getItem('userInfo');
  useEffect(() => {
    if (mytoken) {
      dispatch(setLogin());
    }
  }, [mytoken, dispatch]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
