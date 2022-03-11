import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const userState = {
  user: {},
};

export const kakaoLogin = createAsyncThunk(
  'user/kakaoLogin',
  async (data, thunkAPI) => {
    await axios
      .get(`http://3.39.10.246:8888/member/kakao/callback?code=${data}`)
      .then(res => {
        alert('로그인 완료');
        console.log(res);
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
  reducer: {},
  extraReducers: {
    [kakaoLogin.fulfilled]: (state, action) => {},
  },
});

export default userSlice.reducer;
