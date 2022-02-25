import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const FilterContext = createContext();

export default function FilterContextProvider({ children }) {
  // states
  const [filter, setFilter] = useState({ filterByName: {
    name: '',
  } });
  const [filtredRes, setFiltredRes] = useState('');
  // functions

  const handleFilter = ({ target }) => {
    setFilter({ filterByName: { name: target.value.toLowerCase() } });
  };

  const handleNameFilter = (response) => {
    const name = response.filter((pl) => (
      pl.name.toLowerCase().includes(filter.filterByName.name)));
    setFiltredRes(name);
    console.log(filtredRes);
  };

  return (
    <FilterContext.Provider
      value={ { filter,
        setFilter,
        handleFilter,
        handleNameFilter,
        filtredRes } }
    >
      {children}
    </FilterContext.Provider>
  );
}

FilterContextProvider.propTypes = {
  children: PropTypes.obj,
}.isRequired;
