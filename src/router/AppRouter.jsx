import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainHeader } from '../components/Header';
import Landing from '../pages/Landing';
import Main from '../pages/Main';
import WorkSpace from '../pages/workSpace/WorkSpace';
import Login from '../pages/user/Login';
import MindMap from '../pages/workSpace/MindMap';
import LoginProgress from '../pages/user/LoginProgress';
import Nav from '../components/menu/Nav';
import Notice from '../pages/Notice';
import Garbage from '../pages/Garbage';
import Setting from '../pages/Setting';
import Folder from '../pages/Folder';
import Proposal from '../pages/workSpace/Proposal';
import GapAnalysis from '../pages/workSpace/GapAnalysis';
import SwotAnalysis from '../pages/workSpace/SwotAnalysis';

function AppRouter() {
  return (
    <BrowserRouter>
      <MainHeader />
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/member/kakao/callback" element={<LoginProgress />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/folder" element={<Folder />} />
        <Route path="/garbage" element={<Garbage />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="workspace/:projecId/*" element={<WorkSpace />}>
          <Route path="mindmap/:id" element={<MindMap />} />
          <Route path="gap" element={<GapAnalysis />} />
          <Route path="proposal" element={<Proposal />} />
          <Route path="swot" element={<SwotAnalysis />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
