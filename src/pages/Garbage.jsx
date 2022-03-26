import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { switchPage } from '../redux/slice/navSlice';

const Garbage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(switchPage('garbage'));
  });
  return <div>Garbage</div>;
};

export default Garbage;
