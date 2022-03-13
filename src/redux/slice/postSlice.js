import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const postState = {
  project: {},
};

export const LoadPost = createAsyncThunk(
  'post/LoadPost',
  async (_, thunkAPI) => {
    const result = await axios
      .get('http://localhost:5000/projectId', _)
      .then(res => res.data)
      .catch(err => console.log(err));

    return result;
  },
);

export const CreateNewProject = createAsyncThunk(
  'post/CreateNewProject',
  async (data, thunkAPI) => {
    await axios
      .post('http://13.209.41.157/api/project/create')
      .then(res => console.log(res))
      .catch(err => console.log(err));
  },
);

export const postSlice = createSlice({
  name: 'post',
  initialState: postState,
  reducer: {},
  extraReducers: builder => {
    builder
      .addCase(LoadPost.pending, (state, action) => {
        console.log('pending');
      })
      .addCase(LoadPost.fulfilled, (state, action) => {
        state.project = action.payload;
      })
      .addCase(LoadPost.rejected, () => {});
  },
});

export default postSlice.reducer;
