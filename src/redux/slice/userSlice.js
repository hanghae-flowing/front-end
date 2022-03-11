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
      .get(`http://13.209.41.157/member/kakao/callback?code=${data}`)
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

export const userSlice = createSlice({
  name: 'user',
  initialState: userState,
  reducer: {
    loginCheck: state => {
      state.isLogin = true;
    },
  },
  extraReducers: {
    [kakaoLogin.fulfilled]: (state, action) => {
      state.isLogin = true;
    },
  },
});

export const { loginCheck } = userSlice.actions;

export default userSlice.reducer;
