import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const inviteState = {
}

export const sendInvite = createAsyncThunk(
  'invite/send',
  async (sendData, {rejectWithValue}) => {
    try {
      return await axios.post("http://52.79.250.142/invite", sendData).then((response) => {
        console.log(response);
      })
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response);
    }
  }

)

export const inviteSlice = createSlice({
  name: 'mind',
  initialState: inviteState,
  reducer:{
    
  },
  extraReducers: builder => {
    builder
      .addCase(sendInvite.fulfilled, (state, action) => {
        console.log(action.payload);
      })
  }
})