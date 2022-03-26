import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { switchPage } from '../redux/slice/navSlice';

const Setting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(switchPage('setting'));
  });
  return <div>Setting</div>;
};

export default Setting;
