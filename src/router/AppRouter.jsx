import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import Landing from '../pages/Landing';
import Main from '../pages/Main';
import WorkSpace from '../pages/workSpace/WorkSpace';
import Login from '../pages/user/Login';
import MindSpace from '../pages/workSpace/MindSpace';
import CoreSpace from '../pages/workSpace/CoreSpace';
import OrganizeSpace from '../pages/workSpace/OrganizeSpace';

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <SideNav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="main" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="toast/*" element={<WorkSpace />}>
          <Route index element={<MindSpace />} />
          <Route path="mind-space" element={<MindSpace />} />
          <Route path="core-space" element={<CoreSpace />} />
          <Route path="organize-space" element={<OrganizeSpace />} />
        </Route>
        <Route path="mainplus" element={<MainPlus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
