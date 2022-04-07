import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { URL } from '../../API';

export const getTemplate = createAsyncThunk(
  'template/get',
  async (projectId, { rejectWithValue }) => {
    try {
      return await URL.get(`/project/${projectId}/templates`)
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response);
    }
  },
);

const tempSlice = createSlice({
  name: 'template',
  initialState: {
    tempOpen: true,
    addOpen: false,
    nodeTableList: 0,
    documentList: 0,
    gapTableList: 0,
    swotList: 0,
  },
  reducers: {
    isOpen: (state, action) => {
      state.tempOpen = !state.tempOpen;
    },
    isModal: (state, action) => {
      state.addOpen = !state.addOpen;
    },
  },
  extraReducers: builder => {
    builder.addCase(getTemplate.fulfilled, (state, action) => {
      // console.log(action.payload);
      // state.documentList = action.payload.documentIdList;
      // state.nodeTableList = action.payload.nodeTableIdList;
      // state.gapTableList = action.payload.gapTableIdList;
      // state.swotList = action.payload.swotIdList;
    });
  },
});

export const { isOpen, isModal } = tempSlice.actions;

export default tempSlice.reducer;
