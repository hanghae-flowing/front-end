import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { URL } from '../../API';
import { createNewDocument } from './docSlice';

const postState = {
  project: {},
  projectInfo: {},
  documentId: 0,
  gapTableId: 0,
  nodeTable: 0,
};

export const LoadPost = createAsyncThunk(
  'post/LoadPost',
  async (data, thunkAPI) => {
    const result = await URL.post('/project/detail', data)
      .then(res => {
        console.log(res);
        return res.data;
      })
      .catch(err => console.log(err));
    return result;
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
      return await URL.get(`/project/${projectId}`).then(res => {
        sessionStorage.setItem('projectInfo', JSON.stringify(res.data));
        return res.data;
      });
    } catch (error) {
      console.error(error);
    }
  },
);

export const CreateNewProject = createAsyncThunk(
  'post/CreateNewProject',
  async ({ sendingData, navigate }, { dispatch }, thunkAPI) => {
    return await URL.post('/project', sendingData)
      .then(res => {
        sessionStorage.setItem('projectInfo', JSON.stringify(res.data));
        navigate(`/workspace/${res.data.projectId}`);
        return res.data;
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

export const setProjectInfo = createAsyncThunk(
  'post/setProjectInfo',
  async (data, thunkAPI) => {
    return data;
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
      .addCase(CreateNewProject.fulfilled, (state, action) => {
        console.log(action.payload);
        state.documentId = action.payload.documentId;
        state.gapTableId = action.payload.gapTableId;
        state.nodeTable = action.payload.nodeTableId;
        console.log('create fulfiled');
      })
      .addCase(CreateNewProject.rejected, () => {
        console.log('create rejected');
      })
      .addCase(DeleteProject.fulfilled, (state, action) => {
        console.log('delete');
      })
      .addCase(OpenWorkSpace.fulfilled, (state, action) => {
        console.log(action.payload);
        state.projectInfo = action.payload.projectInfo;
        state.documentId = action.payload.documentId;
        state.gapTableId = action.payload.gapTableId;
        state.nodeTable = action.payload.nodeTable;
      })
      .addCase(setProjectInfo.fulfilled, (state, action) => {
        console.log(action.payload);
        state.projectInfo = action.payload.projectInfo;
        state.documentId = action.payload.documentId;
        state.gapTableId = action.payload.gapTableId;
        state.nodeTable = action.payload.nodeTable;
      });
  },
});
export const { setThumbnail } = postSlice.actions;

export default postSlice.reducer;
