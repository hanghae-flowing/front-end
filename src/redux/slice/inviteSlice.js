import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { URL } from '../../API';

const inviteState = {
  invitations: {},
  personToInvite: {},
};

export const sendInvite = createAsyncThunk(
  'invite/sendInvite',
  async (invitationData, thunkAPI) => {
    try {
      return await URL.post('/inviting', invitationData)
    } catch (error) {
      console.error(error);
    }
  },
);

export const checkMyInvitation = createAsyncThunk(
  'invite/checkMyInvitation',
  async (sendData, thunkAPI) => {
    const result = await URL.get(`/inviting/${sendData.userId}`)
      .then(res => {
        sessionStorage.setItem('invitingInfo', JSON.stringify(res.data));
        return res.data;
      })
      .catch(err => console.error(err));
    return result;
  },
);

export const acceptInvitation = createAsyncThunk(
  'invite/acceptInvitation',
  async (sendData, thunkAPI) => {
    try {
      return await URL.delete(`/accepting/${sendData.invitingId}`)
    } catch (error) {
      console.error(error);
    }
  },
);

export const declineInvitation = createAsyncThunk(
  'invite/acceptInvitation',
  async (sendData, thunkAPI) => {
    try {
      return await URL.delete(`/refusing/${sendData.invitingId}`)
    } catch (error) {
      console.error(error);
    }
  },
);

export const checkNameByEmail = createAsyncThunk(
  'invite/checkNameByEmail',
  async (sendingData, thunkAPI) => {
    try {
      return await URL.get(`/checkingNameByEmail/${sendingData.email}`).then(
        res => {
          return res.data;
        },
      );
    } catch (error) {
      window.alert('이메일이 존재하지 않습니다.');
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
    builder.addCase(checkNameByEmail.rejected, (state, action) => {
    });
    builder.addCase(checkNameByEmail.fulfilled, (state, action) => {
      state.personToInvite = action.payload;
    });
    builder.addCase(sendInvite.fulfilled, (state, action) => {
      window.location.reload();
    });
  },
});

export default inviteSlice.reducer;
