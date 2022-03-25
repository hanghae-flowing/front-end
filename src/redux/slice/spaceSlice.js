import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from '../../API';

export const postNode = createAsyncThunk(
  "node/post",
  async(_, { rejectWithValue}) => {
    try {
      return await URL.post("/api/node/create", _).then((response) => response.data.nodeInfo);
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response);
    }
  }
)

export const getNode = createAsyncThunk(
  "node/get",
  async(projectId, { rejectWithValue }) => {
    try {
      return await URL.get(`/api/node/showall/${projectId}`).then((response) => response.data);
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response);
    }
  }
)

export const editNode = createAsyncThunk(
  "node/edit",
  async({updateData, nodeId}) => {
    try {
      return await URL.put(`/api/node/edit/${nodeId}`, updateData).then((response) => console.log(response));
    } catch (error) {
      console.error(error);
    }
  }
)

export const deleteNode = createAsyncThunk(
  "node/delete",
  async(nodeId, {rejectWithValue}) => {
    try {
      return await URL.delete(`/api/node/delete/${nodeId}`).then((response) => console.log(response));
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response);
    }
  }
)

export const spaceSlice = createSlice({
  name: "space",
  initialState:{
    projectId:"",
    nodeId:"",
    node:[],
  },
  reducers: {
    addNode: (state, action) => {
      return {
        ...state,
        node: [...state.node, action.payload]
      }
    },
    updateProjectId: (state, action) => {
      state.projectId = action.payload;
      console.log(state.projectId)
    },
    deleteAction: (state, action) => {
      const nodeId = action.payload;
      console.log("nodeId ",nodeId);
      return {
        ...state,
        node: state.node.filter((node) => node.nodeId !== nodeId)
      };
    }
  },
  extraReducers: builder => {
    builder
      .addCase(postNode.fulfilled, (state, action) => {
        console.log(action.payload);
      })
      .addCase(getNode.fulfilled, (state, action) => {
        state.node = action.payload;
      })
      .addCase(editNode.fulfilled, (state, action) => {
        console.log("edit")
      })
      .addCase(deleteNode.fulfilled, (state, action) => {
        console.log(action.payload);
      })
  }
})

export const { addNode, updateProjectId, deleteAction } = spaceSlice.actions;

export default spaceSlice.reducer;