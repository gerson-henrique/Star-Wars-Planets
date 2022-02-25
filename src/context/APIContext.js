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
    const results = await getPlanets();
    await setApiResponse(results.results);
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
