import React from 'react';
import { PacmanLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="loader-container">
      <PacmanLoader color="#d63636" />
    </div>
  );
};

export default Loader;
