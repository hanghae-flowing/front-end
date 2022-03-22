import { createSlice } from "@reduxjs/toolkit";

const nodeState = {
  projectId:[],
}

export const nodeSlice = createSlice({
  name: 'node',
  initialState: nodeState,
  reducer:{
    createNode:(state, action) => {
      // return{
      //   ...state,
      //   projectId: [...state.projectId, action.payload]
      // }
      state.projectId.push({
        node: action.payload
      });
    },
  },
  extraReducers: builder => {}
})

export const { createNode } = nodeSlice.actions;

export default nodeSlice.reducer;