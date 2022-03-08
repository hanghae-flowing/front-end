import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Landing from '../pages/Landing';
import Main from '../pages/Main';
import SideNav from '../pages/SideNav';
import Login from '../pages/user/Login';
import MindSpace from '../pages/workSpace/MindSpace';

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="main" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="space/*" element={<SideNav />}>
          <Route index element={<MindSpace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
