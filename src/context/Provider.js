// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

const Provider = ({ children }) => {

  const [ state, setState ] = useState({
    cars: {
      redCar: false,
      blueCar: false,
      yellowCar: false,
    },
    signal: {
      color: 'red',
    },
  })

  const moveCar = (car, side) => {
    setState({
      ...state,
      cars: {
        ...state.cars,
        [car]: side,
      },
    });
  };

  const changeSignal = (signalColor) => {
    setState({
      ...state,
      signal: {
        // ...state.signal,
        color: signalColor,
      },
    });
  };

  const context = { state, moveCar, changeSignal };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
