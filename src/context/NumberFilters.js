import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { APIContext } from './APIContext';

export const NumberFilterContext = createContext();

export default function NumberFilterContextProvider({ children }) {
  const { apiResponse, setApiResponse } = useContext(APIContext);
  // states
  const [filterOptions, setFilterOptions] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const [numericValues, setNumericValues] = useState({ filterByNumericValues: [] });
  const [cardActive] = useState(false);
  const [number, setNumber] = useState(0);
  // functions
  const handleNumber = ({ target }) => {
    setNumber(target.value);
  };

  const numfilter = () => {
    numericValues.filterByNumericValues.forEach((card) => {
      switch (card.comparison) {
      case 'maior que':
        setApiResponse(apiResponse.filter((plt) => (parseInt(plt[card.column], 10)
        > card.value)));
        break;

      case 'menor que':
        setApiResponse(apiResponse.filter((plt) => (parseInt(plt[card.column], 10)
        < card.value)));
        break;

      case 'igual a':
        setApiResponse(apiResponse.filter((plt) => (parseInt(plt[card.column], 10)
         === parseInt(card.value, 10))));
        break;

      default:
        break;
      }
    });
  };
  const createNumericFilterCard = async (newObj) => {
    setFilterOptions(
      filterOptions.filter((options) => (options !== newObj.column)),
    );
    setNumericValues({ filterByNumericValues:
      [...numericValues.filterByNumericValues, newObj] });

    numfilter();
  };

  const deleteFilterCard = ({ target }) => {
    setFilterOptions([...filterOptions, target.id]);
    const removed = numericValues.filterByNumericValues.filter(
      (card) => (card.column !== target.id),
    );

    setNumericValues({ filterByNumericValues: removed });
  };

  const createNewFilterObj = () => {
    const column = document.getElementById('column').value;
    const comparison = document.getElementById('comparison').value;
    const FIX = document.getElementById('number').value;

    const newObj = {
      column,
      comparison,
      value: FIX,
    };

    createNumericFilterCard(newObj);
  };

  useEffect(() => {
    const asyncCall = async () => {
      if (numericValues) {
        numfilter();
      }
    };
    asyncCall();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numericValues]);

  return (
    <NumberFilterContext.Provider
      value={ { filterOptions,
        numericValues,
        cardActive,
        createNewFilterObj,
        deleteFilterCard,
        numfilter,
        number,
        handleNumber } }
    >
      {children}
    </NumberFilterContext.Provider>
  );
}

NumberFilterContextProvider.propTypes = {
  children: PropTypes.obj,
}.isRequired;
