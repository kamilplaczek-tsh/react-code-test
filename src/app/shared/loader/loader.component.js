import React from 'react';
import './loader.css';

const Loader = () => (
  <div className="loader__container">
    <div className="loader__pulse">
      <div className="loader__pulse__circle" />
      <div className="loader__pulse__circle" />
      <div className="loader__pulse__middle" />
    </div>
  </div>
);

export default Loader;
