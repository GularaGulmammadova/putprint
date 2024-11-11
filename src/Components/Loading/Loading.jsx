// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Loading.css';
import loading_img from './../../site assets/logo and icons/SVG/Asset 10p&p.svg';

const Loading = () => {

  return (
    <div className="loading-container">
      <div className="loading-circle">
        <img src={loading_img} alt="Loading" className="loading-image" />
      </div>
    </div>
  );
};

export default Loading;