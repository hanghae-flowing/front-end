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
        console.log(res);
        sessionStorage.setItem('swotInfo', res);
      });
    } catch (err) {
      console.error(err);
    }
  },
);

export const docSlice = createSlice({
  name: 'doc',
  initialState: swotState,
  reducer: {},
  extraReducers: builder => {},
});
