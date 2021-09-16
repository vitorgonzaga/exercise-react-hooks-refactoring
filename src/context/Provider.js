// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

const Provider = ({ children }) => {

  const [ state, setState ] = useState({
    cars: {
      red: false,
      blue: false,
      yellow: false,
    },
  })

  const moveCar = (car, side) => {
    setState({
      ...state,
      [car]: side,
    });
  };

  return (
    <CarsContext.Provider value={{state, moveCar}}>
      {children}
    </CarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
