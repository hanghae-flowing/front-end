import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { URL } from '../../API';

const trashbinState = {
  trash: {},
  folder: {},
  pleaseThrowThoseProjects: [],
  pleaseThrowThoseFolders: [],
  counting: 0,
};

export const getProjectsInTrash = createAsyncThunk(
  'trash/getProjectsInTrash',
  async (sendingData, thunkAPI) => {
    return await URL.get(`project/trash/${sendingData.userId}`)
      .then(res => {
        return res.data;
      })
      .catch(err => console.error(err));
  },
);

export const getFoldersInTrash = createAsyncThunk(
  'trash/getFoldersInTrash',
  async (sendingData, thunkAPI) => {
    return await URL.get(`trash/folder/${sendingData.userId}`)
      .then(res => {
        return res.data;
      })
      .catch(err => console.error(err));
  },
);

export const deleteSelectedProjects = createAsyncThunk(
  'trash/deleteSelectedProjects',
  async ({ sendingData, folderSendingData }, { dispatch }, thunkAPI) => {
    await URL.post('/project/trash/selection', sendingData)
      .then(res => {
        dispatch(deleteSelectedFolders(folderSendingData));
      })
      .catch(err => console.error(err));
  },
);

export const deleteSelectedFolders = createAsyncThunk(
  'trash/deleteSelectedFolders',
  async (folderSendingData, thunkAPI) => {
    await URL.post('/folder/trash/delete', folderSendingData)
      .catch(err => console.error(err));
  },
);

export const recoverSelectedProjects = createAsyncThunk(
  'trash/recoverSelectedProjects',
  async ({ sendingData, folderSendingData }, { dispatch }, thunkAPI) => {
    await URL.post('/project/trash/restore', sendingData)
      .then(res => {
        dispatch(recoverSelectedFolders(folderSendingData));
      })
      .catch(err => console.error(err));
  },
);

export const recoverSelectedFolders = createAsyncThunk(
  'trash/recoverSelectedFolders',
  async (sendingData, thunkAPI) => {
    await URL.post('/folder/restore', sendingData)
      .catch(err => console.error(err));
  },
);

export const emptyMyTrashbin = createAsyncThunk(
  'trash/emptyMyTrashbin',
  async (sendingData, thunkAPI) => {
    try {
      return await URL.delete(`/project/trash/${sendingData.userId}`)
    } catch (err) {
      console.error(err);
    }
  },
);

export const trashSlice = createSlice({
  name: 'trash',
  initialState: trashbinState,
  reducers: {
    setList: (state, action) => {
      state.pleaseThrowThoseProjects = [
        ...state.pleaseThrowThoseProjects,
        action.payload,
      ];

      state.counting += 1;
    },
    setFolderList: (state, action) => {
      state.pleaseThrowThoseFolders = [
        ...state.pleaseThrowThoseFolders,
        action.payload,
      ];

      state.counting += 1;
    },
    unSetList: (state, action) => {
      const newProject = state.pleaseThrowThoseProjects.filter(
        project => project !== action.payload,
      );
      state.pleaseThrowThoseProjects = [...newProject];
      if (state.counting > 0) {
        state.counting -= 1;
      }
    },
    unSetFolderList: (state, action) => {
      const newFolder = state.pleaseThrowThoseFolders.filter(
        project => project !== action.payload,
      );
      state.pleaseThrowThoseFolders = [...newFolder];
      if (state.counting > 0) {
        state.counting -= 1;
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(getProjectsInTrash.fulfilled, (state, action) => {
      state.trash = action.payload;
    });
    builder.addCase(getFoldersInTrash.fulfilled, (state, action) => {
      state.folder = action.payload;
    });
    builder.addCase(recoverSelectedFolders.fulfilled, (state, action) => {
      window.location.reload();
    });
    builder.addCase(deleteSelectedFolders.fulfilled, (state, action) => {
      window.location.reload();
    });
  },
});

export const {
  setList,
  unSetList,
  setCountingToZero,
  unSetFolderList,
  setFolderList,
} = trashSlice.actions;

export default trashSlice.reducer;
