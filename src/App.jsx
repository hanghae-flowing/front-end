import React, { useEffect } from 'react';
import AppRouter from './router/AppRouter';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { useDispatch } from 'react-redux';
import { setLogin } from './redux/slice/userSlice';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { setProjectInfo } from './redux/slice/postSlice';

export const queryClient = new QueryClient();

function App() {
  const dispatch = useDispatch();

  const projectInfo = sessionStorage.getItem('projectInfo');
  useEffect(() => {
    if (projectInfo) {
      dispatch(setProjectInfo(JSON.parse(projectInfo)));
    }
  }, [projectInfo, dispatch]);

  const mytoken = sessionStorage.getItem('userInfo');
  useEffect(() => {
    if (mytoken) {
      dispatch(setLogin());
    }
  }, [mytoken, dispatch]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ThemeProvider theme={theme}>
          <AppRouter />
        </ThemeProvider>
      </div>
      {/* <ReactQueryDevtools initialIsOpem={false} position="bottom-right" /> */}
    </QueryClientProvider>
  );
}

export default App;
