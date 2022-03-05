import { createSlice } from '@reduxjs/toolkit';

const userState = {
  user: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState: userState,
  reducer: {},
});

export default userSlice.reducer;
