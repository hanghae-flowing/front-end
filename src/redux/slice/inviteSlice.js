import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { URL } from '../../API';

const inviteState = {
  invitations: {},
};

export const sendInvite = createAsyncThunk(
  'invite/sendInvite',
  async (sendData, { rejectWithValue }) => {
    try {
      return await URL.post('/inviting', sendData).then(response => {
        console.log(response);
      });
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response);
    }
  },
);

export const checkMyInvitation = createAsyncThunk(
  'invite/checkMyInvitation',
  async (sendData, thunkAPI) => {
    const result = await URL.get(`/inviting/${sendData.userId}`)
      .then(res => {
        console.log(res.data);
        sessionStorage.setItem('invitingInfo', JSON.stringify(res.data));
        return res.data;
      })
      .catch(err => console.log(err));
    return result;
  },
);

export const acceptInvitation = createAsyncThunk(
  'invite/acceptInvitation',
  async (sendData, thunkAPI) => {
    console.log(sendData);
    try {
      return await URL.delete(`/accepting/${sendData.invitingId}`).then(res =>
        console.log(res),
      );
    } catch (error) {
      console.log(error);
    }
  },
);

export const declineInvitation = createAsyncThunk(
  'invite/acceptInvitation',
  async (sendData, thunkAPI) => {
    try {
      return await URL.delete(`/refusing/${sendData.invitingId}`).then(res =>
        console.log(res),
      );
    } catch (error) {
      console.log(error);
    }
  },
);

export const inviteSlice = createSlice({
  name: 'invite',
  initialState: inviteState,
  reducer: {},
  extraReducers: builder => {
    builder.addCase(checkMyInvitation.fulfilled, (state, action) => {
      state.invitations = action.payload;
    });
  },
});

export default inviteSlice.reducer;
