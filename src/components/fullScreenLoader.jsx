import React from 'react';
import logo from './images/llll.jpg'
const FullScreenLoader = () => {
  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex  flex-column justify-content-center align-items-center bg-white"
      style={{ zIndex: 9999 }}
    >
      <img
        src={logo}
        alt="Loading..."
        className="img-fluid mb-4 rounded-circle"
        style={{ maxWidth: '200px' }}
      />
      <div className="spinner-border " role="status" style={{color:"#38384D"}}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default FullScreenLoader;
