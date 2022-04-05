import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
  name:'sort',
  initialState:{
    currentSort:"최신순",
  },
  reducers:{
    selectSort: (state, action) => {
      state.currentSort = action.payload;
    }
  },
})

export const { selectSort } = sortSlice.actions

export default sortSlice.reducer;