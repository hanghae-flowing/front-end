import { createSlice } from "@reduxjs/toolkit";

const gapSlice = createSlice({
  name:"gap",
  initialState:{
    gapNodeId:0,
  },
  reducers:{
    setGapNodeId: (state,action) => {
      state.gapNodeId = action.payload;
    }
  },
})

export const { setGapNodeId } = gapSlice.actions;

export default gapSlice.reducer;