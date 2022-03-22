import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const userState = {
  user: {},
  isLogin: false,
};

export const kakaoLogin = createAsyncThunk(
  'user/kakaoLogin',
  async ({ code, navigate }, thunkAPI) => {
    await axios
      .get(`http://13.209.41.157/member/kakao/callback?code=${code}`)
      .then(res => {
        alert('로그인 완료');
        console.log(res);
        sessionStorage.setItem('userInfo', JSON.stringify(res.data));
        navigate('/main');
      })
      .catch(err => {
        console.log(err);
      });
  },
);

export const kakaoLogout = createAsyncThunk(
  'user/kakaoLogout',
  async (data, thunkAPI) => {
    await axios
      .post(`http://13.209.41.157/api/logout`, data)
      .then(res => {
        console.log(res);
        alert('로그아웃 완료');
      })
      .catch(err => console.log(err));
  },
);

export const LoadMyInfo = createAsyncThunk(
  'user/loadMyPage',
  async (data, thunkAPI) => {
    const result = await axios
      .post(`http://13.209.41.157/api/mypage`, data)
      .then(res => res)
      .catch(err => err);
    return result;
  },
);

export const setLogin = createAsyncThunk('user/setLogin', async () => {});

export const userSlice = createSlice({
  name: 'user',
  initialState: userState,
  reducer: {},
  extraReducers: builder => {
    builder
      .addCase(kakaoLogin.fulfilled, (state, action) => {
        state.isLogin = true;
      })
      .addCase(kakaoLogin.rejected, (state, action) => {
        return;
      })
      .addCase(kakaoLogout.fulfilled, (state, action) => {
        sessionStorage.clear();
        state.isLogin = false;
      })
      .addCase(LoadMyInfo.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(setLogin.fulfilled, state => {
        state.isLogin = true;
      });
  },
});

export default userSlice.reducer;
