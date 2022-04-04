import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { URL } from '../../API';

function arrayRemove(arr, value) {
  return arr.filter(function (ele) {
    return ele != value;
  });
}

const trashbinState = {
  trash: {},
  pleaseThrowThoseProjects: [],
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

export const deleteSelectedProjects = createAsyncThunk(
  'trash/deleteSelectedProjects',
  async (sendingData, thunkAPI) => {
    await URL.post('/project/trash/selection', sendingData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  },
);

export const recoverSelectedProjects = createAsyncThunk(
  'trash/deleteSelectedProjects',
  async (sendingData, thunkAPI) => {
    await URL.post('/project/trash/restore', sendingData)
      .then(res => console.log(res))
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
  reducers: {
    setList: (state, action) => {
      console.log(action.payload);
      state.pleaseThrowThoseProjects = [
        ...state.pleaseThrowThoseProjects,
        action.payload,
      ];
      console.log(state.pleaseThrowThoseProjects);
    },
    unSetList: (state, action) => {
      const newProject = state.pleaseThrowThoseProjects.filter(
        project => project !== action.payload,
      );
      state.pleaseThrowThoseProjects = [...newProject];
      // console.log(state.pleaseThrowThoseProjects);
    },
  },
  extraReducers: builder => {
    builder.addCase(getProjectsInTrash.fulfilled, (state, action) => {
      console.log(action.payload);
      state.trash = action.payload;
    });
  },
});

export const { setList, unSetList } = trashSlice.actions;

export default trashSlice.reducer;
