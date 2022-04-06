import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL } from '../../API';
import { createNewDocument } from './docSlice';

const postState = {
  project: {},
  projectInfo: {},
  bookmarkedList: {},
  documentId: 0,
  gapTableId: 0,
  nodeTable: 0,
  swotId: 0,
  memberList: [],
};

export const LoadPost = createAsyncThunk(
  'post/LoadPost',
  async (data, thunkAPI) => {
    const result = await URL.post('/project/detail', data)
      .then(res => {
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
        console.log(res);
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
  async ({ sendingData, navigate }, thunkAPI) => {
    return await URL.post('/project', sendingData)
      .then(res => {
        sessionStorage.setItem('projectInfo', JSON.stringify(res.data));
        navigate(`/workspace/${res.data.projectInfo.projectId}`);
        console.log(res.data);
        return res.data;
      })
      .catch(err => console.log(err));
  },
);

export const ThrowProject = createAsyncThunk(
  'post/throwProject',
  async (sendingData, thunkAPI) => {
    await URL.post(`project/trash`, sendingData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  },
);

export const ThrowFolder = createAsyncThunk(
  'post/throwFolder',
  async (sendingData, thunkAPI) => {
    await URL.post(`folder/trash`, sendingData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  },
);

export const setBookmark = createAsyncThunk(
  'post/setBookmark',
  async ({ sendingData, projectId }, thunkAPI) => {
    await URL.post(`/bookmark/${projectId}`, sendingData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  },
);

export const setFolderBookmark = createAsyncThunk(
  'post/setFolderBookmark',
  async (sendingData, { rejectWithValue }) => {
    try {
      return await URL.post(`/folder/bookmark`, sendingData).then(res =>
        console.log(res),
      );
    } catch (error) {
      console.error(error);
      return rejectWithValue(error);
    }
  },
);

export const setProjectInfo = createAsyncThunk(
  'post/setProjectInfo',
  async (data, thunkAPI) => {
    return data;
  },
);

export const bookmarkedProject = createAsyncThunk(
  'post/bookmarked',
  async (data, { rejectWithValue }) => {
    try {
      return await URL.post(`/bookmarked`, data).then(res => res.data);
    } catch (error) {
      console.error(error);
      return rejectWithValue(error);
    }
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
      .addCase(LoadPost.pending, (state, action) => {})
      .addCase(LoadPost.fulfilled, (state, action) => {
        state.project = action.payload;
      })
      .addCase(LoadPost.rejected, () => {})
      .addCase(CreateNewProject.fulfilled, (state, action) => {
        console.log(action.payload);
        state.documentId = action.payload.documentId;
        state.gapTableId = action.payload.gapTableId;
        state.nodeTable = action.payload.nodeTable;
        state.swotId = action.payload.swotId;
        console.log('create fulfiled');
      })
      .addCase(CreateNewProject.rejected, () => {
        console.log('create rejected');
      })
      .addCase(ThrowProject.fulfilled, () => {
        window.location.reload();
      })

      .addCase(OpenWorkSpace.fulfilled, (state, action) => {
        console.log(action.payload);
        state.projectInfo = action.payload.projectInfo;
        state.documentId = action.payload.documentId;
        state.gapTableId = action.payload.gapTableId;
        state.nodeTable = action.payload.nodeTable;
        state.swotId = action.payload.swotId;
        state.memberList = action.payload.projectMemberInfoList;
      })
      .addCase(setProjectInfo.fulfilled, (state, action) => {
        state.projectInfo = action.payload.projectInfo;
        state.documentId = action.payload.documentId;
        state.gapTableId = action.payload.gapTableId;
        state.nodeTable = action.payload.nodeTable;
        state.swotId = action.payload.swotId;
        state.memberList = action.payload.projectMemberInfoList;
      })
      .addCase(bookmarkedProject.fulfilled, (state, action) => {
        state.bookmarkedList = action.payload;
      });
  },
});
export const { setThumbnail } = postSlice.actions;

export default postSlice.reducer;
