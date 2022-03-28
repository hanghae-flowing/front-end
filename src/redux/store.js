import { configureStore } from '@reduxjs/toolkit';
import inviteSlice from './slice/inviteSlice';
import navSlice from './slice/navSlice';
import postSlice from './slice/postSlice';
import spaceSlice from './slice/spaceSlice';
import tampSlice from './slice/tampSlice';
import userSlice from './slice/userSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    post: postSlice,
    invite: inviteSlice,
    space: spaceSlice,
    nav: navSlice,
    tamplate: tampSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
