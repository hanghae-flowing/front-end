import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const postState = {
  project: {},
};

export const LoadPost = createAsyncThunk(
  'post/LoadPost',
  async (data, thunkAPI) => {
    const result = await axios
      .post('http://13.209.41.157/api/project/read', data)
      .then(res => res.data)
      .catch(err => console.log(err));

    return result;
  },
);

export const LoadAllPost = createAsyncThunk(
  'post/LoadAllPost',
  async (data, thunkAPI) => {
    const result = await axios
      .post('http://13.209.41.157/api/project/readAll', data)
      .then(res => res.data)
      .catch(err => console.log(err));

    return result;
  },
);

export const CreateNewProject = createAsyncThunk(
  'post/CreateNewProject',
  async (data, thunkAPI) => {
    await axios
      .post('http://13.209.41.157/api/project/create', data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  },
);

export const postSlice = createSlice({
  name: 'post',
  initialState: postState,
  reducer: {
    setThumbnail: (state, action) => {
      state.project.thumbNailNum = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(LoadPost.pending, (state, action) => {
        console.log('pending');
      })
      .addCase(LoadPost.fulfilled, (state, action) => {
        state.project = action.payload;
      })
      .addCase(LoadPost.rejected, () => {})

      .addCase(LoadAllPost.pending, (state, action) => {
        console.log('pending');
      })
      .addCase(LoadAllPost.fulfilled, (state, action) => {
        state.project = action.payload;
      })
      .addCase(LoadAllPost.rejected, () => {})

      .addCase(CreateNewProject.pending, (state, action) => {
        console.log('pending');
      })
      .addCase(CreateNewProject.fulfilled, (state, action) => {
        console.log('create fulfiled');
      })
      .addCase(CreateNewProject.rejected, () => {
        console.log('create rejected');
      });
  },
});
export const { setThumbnail } = postSlice.actions;

export default postSlice.reducer;
