import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL } from '../../API';

const swotState = {
  swot: [],
};

export const createNewSwot = createAsyncThunk(
  'swot/createNewSwot',
  async (swotSendingData, thunkAPI) => {
    try {
      return await axios
        .post(`http://52.79.250.142/swot/${swotSendingData.projectId}`)
        .then(res => {
          console.log(res);
          sessionStorage.setItem('swotInfo', res.data.swotId);
        });
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
