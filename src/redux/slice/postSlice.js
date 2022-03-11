import { createSlice } from '@reduxjs/toolkit';

const postState = {
  project: {},
};

export const postSlice = createSlice({
  name: 'user',
  initialState: postState,
  reducer: {},
  extraReducers: {},
});

export default postSlice.reducer;
