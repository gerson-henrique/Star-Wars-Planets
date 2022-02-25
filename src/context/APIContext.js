import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services/CallPlanetsAPI';

export const APIContext = createContext();

export default function APIContextProvider({ children }) {
  // states
  const [load, setLoad] = useState(true);
  const [apiResponse, setApiResponse] = useState('');
  // functions
  const handleAPI = async () => {
    setLoad(true);
    const results = await getPlanets();
    setApiResponse(results.results);
    setLoad(false);
  };

  return (
    <APIContext.Provider value={ { load, apiResponse, setApiResponse, handleAPI } }>
      {children}
    </APIContext.Provider>
  );
}

APIContextProvider.propTypes = {
  children: PropTypes.obj,
}.isRequired;
