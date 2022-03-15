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
      <Link to="/login">go to login</Link>
    </div>
  );
};

export default Landing;
