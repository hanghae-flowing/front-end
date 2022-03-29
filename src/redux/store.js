import { configureStore } from '@reduxjs/toolkit';
import inviteSlice from './slice/inviteSlice';
import navSlice from './slice/navSlice';
import postSlice from './slice/postSlice';
import spaceSlice from './slice/spaceSlice';
import tampSlice from './slice/tampSlice';
import userSlice from './slice/userSlice';
import docSlice from './slice/docSlice';
import { swotSlice } from './slice/swotSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    post: postSlice,
    invite: inviteSlice,
    space: spaceSlice,
    nav: navSlice,
    doc: docSlice,
    tamplate: tampSlice,
    swot: swotSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
