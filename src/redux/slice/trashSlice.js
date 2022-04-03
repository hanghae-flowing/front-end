import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { URL } from '../../API';

const trashbinState = {
  trash: {},
  pleaseThrowThoseProjects: {},
};

export const getProjectsInTrash = createAsyncThunk(
  'trash/getProjectsInTrash',
  async (sendingData, thunkAPI) => {
    return await URL.get(`project/trash/${sendingData.userId}`)
      .then(res => {
        console.log(res);
        return res.data;
      })
      .catch(err => console.log(err));
  },
);

export const emptyMyTrashbin = createAsyncThunk(
  'trash/emptyMyTrashbin',
  async (sendingData, thunkAPI) => {
    try {
      return await URL.delete(`/project/trash/${sendingData.userId}`).then(
        res => {
          console.log(res);
        },
      );
    } catch (err) {
      console.error(err);
    }
  },
);

export const trashSlice = createSlice({
  name: 'trash',
  initialState: trashbinState,
  reducer: {},
  extraReducers: builder => {
    builder.addCase(getProjectsInTrash.fulfilled, (state, action) => {
      console.log(action.payload);
      state.trash = action.payload;
    });
  },
});

export const {} = trashSlice.actions;

export default trashSlice.reducer;
