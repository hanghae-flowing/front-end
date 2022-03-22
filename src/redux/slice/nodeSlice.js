import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL } from '../../API';

const nodeState = {
  node:[],
};

export const postNode = createAsyncThunk(
  "node/post",
  async(_, { rejectWithValue}) => {
    try {
      return await URL.post("/api/node/create", _).then((response) => console.log(response));
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response);
    }
  }
)


export const nodeSlice = createSlice({
  name: 'node',
  initialState: nodeState,
  reducer:{
    addNode:(state, action) => {
      return{
        ...state,
        node:[...state.node, action.payload]
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(postNode.fulfilled, (state, action) => {
        state.node = action.payload;
      })
  }
})

export const { addNode } = nodeSlice.actions;

export default nodeSlice.reducer;