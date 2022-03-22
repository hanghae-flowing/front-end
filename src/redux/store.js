import { configureStore } from '@reduxjs/toolkit';
import inviteSlice from './slice/inviteSlice';
import nodeSlice from './slice/nodeSlice';
import postSlice from './slice/postSlice';
import userSlice from './slice/userSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    post: postSlice,
    node: nodeSlice,
    invite: inviteSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
