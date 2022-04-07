import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { URL } from '../../API';

const swotState = {
  swot: [],
};

export const createNewSwot = createAsyncThunk(
  'swot/createNewSwot',
  async (swotSendingData, thunkAPI) => {
    try {
      return await URL.post(`/swot/${swotSendingData.projectId}`).then(res => {
        sessionStorage.setItem('swotInfo', res.data.swotId);
      });
    } catch (err) {
      console.error(err);
    }
  },
);

export const editStrTableText = createAsyncThunk(
  'swot/editSwotTableText',
  async ({ swotSendingData, lineId }, thunkAPI) => {
    try {
      return await URL.put(`/swot/strength/${lineId}`, swotSendingData)
    } catch (err) {
      console.error(err);
    }
  },
);
export const editWeakTableText = createAsyncThunk(
  'swot/editSwotTableText',
  async ({ swotSendingData, lineId }, thunkAPI) => {
    try {
      return await URL.put(`/swot/weakness/${lineId}`, swotSendingData)
    } catch (err) {
      console.error(err);
    }
  },
);
export const editOpporTableText = createAsyncThunk(
  'swot/editSwotTableText',
  async ({ swotSendingData, lineId }, thunkAPI) => {
    try {
      return await URL.put(`/swot/opportunity/${lineId}`, swotSendingData)
    } catch (err) {
      console.error(err);
    }
  },
);
export const editThreatTableText = createAsyncThunk(
  'swot/editSwotTableText',
  async ({ swotSendingData, lineId }, thunkAPI) => {
    try {
      return await URL.put(`/swot/threat/${lineId}`, swotSendingData)
    } catch (err) {
      console.error(err);
    }
  },
);

export const swotSlice = createSlice({
  name: 'doc',
  initialState: swotState,
  reducer: {},
  extraReducers: builder => {
    builder.addCase(createNewSwot.fulfilled, (state, action) => {
      state.swot = action.payload;
    });
  },
});

export default swotSlice.reducer;
