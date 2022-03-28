import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { URL } from '../../API';
const docState = {
  docs: [],
};

export const createNewDocument = createAsyncThunk(
  'doc/createNewDocument',
  async (sendingData, thunkAPI) => {
    try {
      return await URL.post(`/document/${sendingData.projectId}`).then(res => {
        console.log(res);
        sessionStorage.setItem('docInfo', res.data.documentId);
      });
    } catch (err) {
      console.error(err);
    }
  },
);

export const createNewLine = createAsyncThunk(
  'doc/createNewLine',
  async (sendingData, thunkAPI) => {
    console.log(sendingData);
    try {
      return await URL.post('/documentLines', sendingData).then(res => {
        console.log(res);
      });
    } catch (err) {
      console.error(err);
    }
  },
);

export const editLine = createAsyncThunk(
  'doc/editLine',
  async ({ sendingData, lineId }, thunkAPI) => {
    try {
      return await URL.put(`/documentLines/${lineId}`, sendingData).then(res =>
        console.log(res),
      );
    } catch (err) {
      console.log(err);
    }
  },
);

export const openDoc = createAsyncThunk(
  'doc/openDoc',
  async ({ docSendingData, navigate }, thunkAPI) => {
    try {
      const result = await URL.get(`/document/${docSendingData.projectId}`);
      navigate('proposal');
      return result;
    } catch (err) {
      console.log(err);
    }
  },
);

export const deleteLine = createAsyncThunk(
  'doc/deleteLine',
  async (sendingData, thunkAPI) => {
    await URL.delete(`documentLines/${sendingData}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  },
);

export const docSlice = createSlice({
  name: 'doc',
  initialState: docState,
  reducer: {},
  extraReducers: builder => {},
});
export default docSlice.reducer;
