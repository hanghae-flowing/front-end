import React from 'react';
import { Link, Routes, Route, Outlet } from 'react-router-dom';

const SideNav = () => {
  return (
    <div style={{ paddingTop: '200px' }}>
      <div>
        <p>SideNav</p>
        <Link to="mindspace">step1</Link>
        <Link to="2">step2</Link>
        <Link to="3">step3</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default SideNav;
