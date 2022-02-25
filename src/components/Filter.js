import React, { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';

export default function Filter() {
  const { filter, handleFilter } = useContext(FilterContext);
  return (
    <input value={ filter.name } data-testid="name-filter" onChange={ handleFilter } />
  );
}
