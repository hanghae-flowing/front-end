import { configureStore } from '@reduxjs/toolkit';
import inviteSlice from './slice/inviteSlice';
import navSlice from './slice/navSlice';
import postSlice from './slice/postSlice';
import nodeSlice from './slice/nodeSlice';
import tempSlice from './slice/tempSlice';
import userSlice from './slice/userSlice';
import docSlice from './slice/docSlice';
import swotSlice from './slice/swotSlice';
import trashSlice from './slice/trashSlice';
import gapSlice from './slice/gapSlice';
import sortSlice from './slice/sortSlice';
import folderSlice from './slice/folderSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    post: postSlice,
    invite: inviteSlice,
    node: nodeSlice,
    nav: navSlice,
    doc: docSlice,
    template: tempSlice,
    gap: gapSlice,
    swot: swotSlice,
    trash: trashSlice,
    sort: sortSlice,
    folder: folderSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
