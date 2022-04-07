import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name:"nav",
  initialState:{
    tabbed:true,
    currentPage:"",
  },
  reducers:{
    toggleTab: (state, action) => {
      state.tabbed = !state.tabbed;
    },
    switchPage: (state, action) => {
      state.currentPage = action.payload;
    }
  },
})

export const { toggleTab, switchPage } = navSlice.actions;

export default navSlice.reducer;