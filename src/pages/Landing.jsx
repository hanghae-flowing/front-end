import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Link to="/main">go to home</Link>
    </div>
  );
};

export default Landing;
