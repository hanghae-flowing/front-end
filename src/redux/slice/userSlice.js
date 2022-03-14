import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const userState = {
  user: {},
  isLogin: false,
};

export const kakaoLogin = createAsyncThunk(
  'user/kakaoLogin',
  async (data, thunkAPI) => {
    await axios
      .get(`http://3.39.10.246:8888/member/kakao/callback?code=${data}`)
      .then(res => {
        alert('로그인 완료');
        console.log(res.data.msg);
        sessionStorage.setItem('userInfo', JSON.stringify(res.data));
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
      .post(`http://3.39.10.246:8888/api/logout`, data)
      .then(res => {
        console.log(res);
        alert('로그아웃 완료');
      })
      .catch(err => console.log(err));
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState: userState,
  reducer: {},
  extraReducers: builder => {
    builder
      .addCase(kakaoLogin.fulfilled, (state, action) => {
        state.isLogin = true;
      })
      .addCase(kakaoLogout.fulfilled, (state, action) => {
        sessionStorage.clear();
        state.isLogin = false;
      });
  },
});

export default userSlice.reducer;
