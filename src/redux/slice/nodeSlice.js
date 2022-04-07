import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from '../../API';

export const postNodeTable = createAsyncThunk(
  "node/table/post",
  async(projectId, {rejectWithValue}) => {
    try {
      return await URL.post(`/nodeTable/${projectId}`).then((response) => response.data);
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response);
    };
  }
);

export const postNode = createAsyncThunk(
  "node/post",
  async(_, { rejectWithValue}) => {
    try {
      return await URL.post("/node", _).then((response) => response.data.nodeInfo);
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response);
    }
  }
)

export const getNode = createAsyncThunk(
  "node/get",
  async(nodeTableId, { rejectWithValue }) => {
    try {
      return await URL.get(`/node/all/${nodeTableId}`).then((response) => response.data);
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
      return await URL.put(`/node/${nodeId}`, updateData).then((response) => response.data);
    } catch (error) {
      console.error(error);
    }
  }
)

export const deleteNode = createAsyncThunk(
  "node/delete",
  async(nodeId, {rejectWithValue}) => {
    try {
      return await URL.delete(`/node/${nodeId}`)
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response);
    }
  }
)

export const addPath = createAsyncThunk(
  "path/post",
  async(data, {rejectWithValue}) => {
    try {
      return await URL.post(`/node/path`, data).then((response) => response.data);
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response);
    }
  }
)


export const nodeSlice = createSlice({
  name: "node",
  initialState:{
    projectId:"",
    nodeId:"",
    nodeTableId:"",
    node:[],
    path:[],
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
    },
    deleteAction: (state, action) => {
      const nodeId = action.payload;
      return {
        ...state,
        node: state.node.filter((node) => node.nodeId !== nodeId)
      };
    },
    getNodeTableId: (state, action) => {
      state.nodeTableId = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(postNode.fulfilled, (state, action) => {
      })
      .addCase(getNode.fulfilled, (state, action) => {
        // state.node = action.payload;
      })
      .addCase(editNode.fulfilled, (state, action) => {
      })
      .addCase(deleteNode.fulfilled, (state, action) => {
      })
      .addCase(postNodeTable.fulfilled, (state, action) => {
      })
      .addCase(addPath.fulfilled, (state, action) => {
      })
  }
})

export const { addNode, updateProjectId, deleteAction, getNodeTableId } = nodeSlice.actions;

export default nodeSlice.reducer;