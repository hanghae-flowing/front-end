import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainHeader } from '../components/Header';
import Landing from '../pages/Landing';
import Main from '../pages/Main';
import WorkSpace from '../pages/workSpace/WorkSpace';
import Login from '../pages/user/Login';
import MindMap from '../pages/workSpace/MindMap';
import LoginProgress from '../pages/user/LoginProgress';
import TrashBin from '../pages/TrashBin';
import Folder from '../pages/Folder';
import Proposal from '../pages/workSpace/Proposal';
import GapAnalysis from '../pages/workSpace/GapAnalysis';
import SwotAnalysis from '../pages/workSpace/SwotAnalysis';
import DefaultPage from '../pages/workSpace/DefaultPage';
import SignOut from '../pages/user/SignOut';

function AppRouter() {
  return (
    <BrowserRouter>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/member/kakao/callback" element={<LoginProgress />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/folder" element={<Folder />} />
        <Route path="/trash-bin" element={<TrashBin />} />
        <Route path="workspace/:projecId/*" element={<WorkSpace />}>
          <Route index element={<DefaultPage />} />
          <Route path="mindmap/:id" element={<MindMap />} />
          <Route path="gap/:id" element={<GapAnalysis />} />
          <Route path="proposal/:id" element={<Proposal />} />
          <Route path="swot/:id" element={<SwotAnalysis />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
