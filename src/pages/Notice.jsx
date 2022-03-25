import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { switchPage } from '../redux/slice/navSlice';

const Notice = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(switchPage('notice'));
  });
  return <div>Notice</div>;
};

export default Notice;
