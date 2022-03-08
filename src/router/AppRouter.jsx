import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import Landing from '../pages/Landing';
import Main from '../pages/Main';
import MainPlus from '../pages/MainPlus';
import Login from '../pages/user/Login';
import WorkSpace from '../pages/WorkSpace';

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <SideNav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="main" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="workspace" element={<WorkSpace />} />
        <Route path="mainplus" element={<MainPlus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
