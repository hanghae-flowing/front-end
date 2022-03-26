import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { switchPage } from '../redux/slice/navSlice';

const Folder = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(switchPage('folder'));
  });
  return <div>Folder</div>;
};

export default Folder;
