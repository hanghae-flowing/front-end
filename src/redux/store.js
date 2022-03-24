import { configureStore } from '@reduxjs/toolkit';
import inviteSlice from './slice/inviteSlice';
import postSlice from './slice/postSlice';
import spaceSlice from './slice/spaceSlice';
import userSlice from './slice/userSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    post: postSlice,
    invite: inviteSlice,
    space: spaceSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
