import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { URL } from '../../API';

const trashbinState = {
  trash: {},
  pleaseThrowThoseProjects: [],
  counting: 0,
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
  'trash/recoverSelectedProjects',
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
      state.counting += 1;
      console.log(state.counting);
    },
    unSetList: (state, action) => {
      const newProject = state.pleaseThrowThoseProjects.filter(
        project => project !== action.payload,
      );
      state.pleaseThrowThoseProjects = [...newProject];
      if (state.counting > 0) {
        state.counting -= 1;
      }

      console.log(state.counting);
    },
  },
  extraReducers: builder => {
    builder.addCase(getProjectsInTrash.fulfilled, (state, action) => {
      console.log(action.payload);
      state.trash = action.payload;
    });
    builder.addCase(recoverSelectedProjects.fulfilled, (state, action) => {
      window.location.reload();
    });
    builder.addCase(deleteSelectedProjects.fulfilled, (state, action) => {
      window.location.reload();
    });
  },
});

export const { setList, unSetList } = trashSlice.actions;

export default trashSlice.reducer;
