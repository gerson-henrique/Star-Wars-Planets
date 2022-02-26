import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const NumberFilterContext = createContext();

export default function NumberFilterContextProvider({ children }) {
  // states
  const [filterOptions] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  // functions

  return (
    <NumberFilterContext.Provider
      value={ { filterOptions } }
    >
      {children}
    </NumberFilterContext.Provider>
  );
}

NumberFilterContextProvider.propTypes = {
  children: PropTypes.obj,
}.isRequired;
