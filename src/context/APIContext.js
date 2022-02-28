import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services/CallPlanetsAPI';

export const APIContext = createContext();

export default function APIContextProvider({ children }) {
  // states

  const [apiResponse, setApiResponse] = useState('');
  const [load, setLoad] = useState(true);
  // functions
  const handleAPI = async () => {
    const results = await getPlanets();
    setApiResponse(results.results);
  };

  return (
    <APIContext.Provider
      value={ { load,
        apiResponse,
        setApiResponse,
        handleAPI,
        setLoad } }
    >
      {children}
    </APIContext.Provider>
  );
}

APIContextProvider.propTypes = {
  children: PropTypes.obj,
}.isRequired;
