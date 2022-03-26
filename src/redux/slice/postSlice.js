import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL } from '../../API';

const postState = {
  project: {},
};

export const LoadPost = createAsyncThunk(
  'post/LoadPost',
  async (data, thunkAPI) => {
    const result = await URL.post('/myproject', data)
      .then(res => res.data)
      .catch(err => console.log(err));
    console.log(result);
    return result;
  },
);

export const LoadAllPost = createAsyncThunk(
  'post/LoadAllPost',
  async (data, thunkAPI) => {
    const result = await URL.post('/project', data)
      .then(res => res.data)
      .catch(err => console.log(err));

    return result;
  },
);

export const LoadMyPost = createAsyncThunk(
  'post/LoadMyPost',
  async (data, thunkAPI) => {
    await URL.post('/api/mytoast/create', data)
      .then(res => res.data)
      .catch(err => err);
  },
);

export const LoadBookmarkedPost = createAsyncThunk(
  'post/LoadBookmarkedPost',
  async (data, thunkAPI) => {
    await URL.post('/api/mytoast/included', data)
      .then(res => res.data)
      .catch(err => err);
  },
);

export const OpenWorkSpace = createAsyncThunk(
  'post/OpenWorkSpace',
  async (data, thunkAPI) => {
    await URL.get(`/project/${data}`)
      .then(res => {
        sessionStorage.getItem('projectInfo') &&
          sessionStorage.removeItem('projectInfo');
        sessionStorage.setItem(
          'projectInfo',
          JSON.stringify(res.data.info.projectId),
        );
      })
      .catch(err => console.log(err));
  },
);

export const CreateNewProject = createAsyncThunk(
  'post/CreateNewProject',
  async ({ sendingData, navigate }, thunkAPI) => {
    await URL.post('/project', sendingData)
      .then(res => {
        console.log(res);
        navigate(`/workspace/${res.data.projectId}`);
      })
      .catch(err => console.log(err));
  },
);

export const DeleteProject = createAsyncThunk(
  'post/DeleteProject',
  async ({ projectId }, thunkAPI) => {
    await URL.delete(`/project/${projectId}`);
  },
);

export const TestPost = createAsyncThunk(
  'post/TestPost',
  async (text, thunkAPI) => {
    await axios
      .post(`http://13.209.41.157/api/test/text?data=${text}`, text)
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
      .addCase(LoadMyPost.pending, (state, action) => {
        console.log('pending');
      })
      .addCase(LoadMyPost.fulfilled, (state, action) => {
        state.project = action.payload;
      })
      .addCase(LoadMyPost.rejected, () => {})
      .addCase(CreateNewProject.pending, (state, action) => {
        console.log('pending');
      })
      .addCase(CreateNewProject.fulfilled, (state, action) => {
        console.log('create fulfiled');
      })
      .addCase(CreateNewProject.rejected, () => {
        console.log('create rejected');
      })
      .addCase(DeleteProject.fulfilled, (state, action) => {
        console.log('delete');
      });
  },
});
export const { setThumbnail } = postSlice.actions;

export default postSlice.reducer;
