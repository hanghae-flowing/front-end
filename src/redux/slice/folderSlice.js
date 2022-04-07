import { createSlice } from "@reduxjs/toolkit";

const folderSlice = createSlice({
  name:"folder",
  initialState:{
    projectId:0,
    folderTableId:0,
  },
  reducers:{
    setProjectId: (state, action) => {
      state.projectId = action.payload;
    }
  },
});

export const { setProjectId } = folderSlice.actions;

export default folderSlice.reducer;