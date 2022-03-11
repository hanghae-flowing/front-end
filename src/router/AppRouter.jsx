import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Landing from '../pages/Landing';
import Main from '../pages/Main';
import WorkSpace from '../pages/workSpace/WorkSpace';
import Login from '../pages/user/Login';
import MindSpace from '../pages/workSpace/MindSpace';
import CoreSpace from '../pages/workSpace/CoreSpace';
import OrganizeSpace from '../pages/workSpace/OrganizeSpace';
import ListDetail from '../pages/ListDetail';
import LoginProgress from '../pages/user/LoginProgress';

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="main" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="/member/kakao/callback" element={<LoginProgress />} />
        <Route path="toast/*" element={<WorkSpace />}>
          <Route index element={<MindSpace />} />
          <Route path="mind-space" element={<MindSpace />} />
          <Route path="core-space" element={<CoreSpace />} />
          <Route path="organize-space" element={<OrganizeSpace />} />
        </Route>
        <Route path="listdetail" element={<ListDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
