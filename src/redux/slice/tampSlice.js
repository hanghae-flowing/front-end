import { createSlice } from "@reduxjs/toolkit";

const tampSlice = createSlice({
  name: "tamplate",
  initialState:{
    tampOpen:false,
  },
  reducers:{
    isOpen:(state, action) => {
      state.tampOpen = !state.tampOpen;
    }
  },
})

export const { isOpen } =tampSlice.actions;

export default tampSlice.reducer;