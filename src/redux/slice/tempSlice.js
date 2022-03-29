import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from "../../API";

export const getTemplate = createAsyncThunk(
  "template/get",
  async(projectId, {rejectWithValue}) => {
    try {
      return await URL
      .get(`/project/${projectId}/templates`)
      .then((response) => response.data);
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response);
    }
  }
);


const tempSlice = createSlice({
  name: "template",
  initialState:{
    tempOpen:false,
    addOpen:false,
    nodeTableList:[],
    documentTableList:[],
  },
  reducers:{
    isOpen:(state, action) => {
      state.tempOpen = !state.tempOpen;
    },
    isModal: (state, action) => {
      state.addOpen = !state.addOpen;
    }
  },
  extraReducers: builder => {
    builder
    .addCase(getTemplate.fulfilled, (state, action) => {
      console.log(action.payload);
      state.documentTableList = action.payload.documentTableIdList;
      state.nodeTableList = action.payload.nodeTableIdList;
    })
  }
})

export const { isOpen, isModal } = tempSlice.actions;

export default tempSlice.reducer;