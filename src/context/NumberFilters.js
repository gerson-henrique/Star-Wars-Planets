import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const NumberFilterContext = createContext();

export default function NumberFilterContextProvider({ children }) {
  // states
  const [filterOptions, setFilterOptions] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const [numericValues, setNumericValues] = useState({ filterByNumericValues: [] });
  const [cardActive] = useState(false);
  // functions
  const createNumericFilterCard = (newObj) => {
    setFilterOptions(
      filterOptions.filter((options) => (options !== newObj.column)),
    );
    setNumericValues({ filterByNumericValues:
      [...numericValues.filterByNumericValues, newObj] });
    console.log(numericValues);
  };

  const deleteFilterCard = ({ target }) => {
    setFilterOptions([...filterOptions, target.id]);
    console.log(target.id);
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

    console.log(newObj);

    createNumericFilterCard(newObj);
  };

  return (
    <NumberFilterContext.Provider
      value={ { filterOptions,
        numericValues,
        cardActive,
        createNewFilterObj,
        deleteFilterCard } }
    >
      {children}
    </NumberFilterContext.Provider>
  );
}

NumberFilterContextProvider.propTypes = {
  children: PropTypes.obj,
}.isRequired;
