import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { URL } from '../../API';
import { createNewDocument } from './docSlice';

const postState = {
  project: {},
  projectInfo: {},
};

export const LoadPost = createAsyncThunk(
  'post/LoadPost',
  async (data, thunkAPI) => {
    const result = await URL.post('/myproject', data)
      .then(res => res.data)
      .catch(err => console.log(err));
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
  async (projectId, thunkAPI) => {
    try {
      return await URL.get(`/project/${projectId}`).then(res => res.data.info);
    } catch (error) {
      console.error(error);
    }
  },
);

export const CreateNewProject = createAsyncThunk(
  'post/CreateNewProject',
  async ({ sendingData, navigate }, { dispatch }, thunkAPI) => {
    await URL.post('/project', sendingData)
      .then(res => {
        console.log(res);
        const secondSendingData = {
          projectId: parseInt(res.data.projectId),
        };
        sessionStorage.setItem('projectInfo', res.data.projectId);
        dispatch(createNewDocument(secondSendingData));
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
      })
      .addCase(OpenWorkSpace.fulfilled, (state, action) => {
        state.projectInfo = action.payload;
      });
  },
});
export const { setThumbnail } = postSlice.actions;

export default postSlice.reducer;
