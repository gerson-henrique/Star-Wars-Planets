import React, { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';
import NumberSelector from './NumberSelector';

export default function Filter() {
  const { filter, handleFilter } = useContext(FilterContext);
  return (
    <div>
      <input value={ filter.name } data-testid="name-filter" onChange={ handleFilter } />
      <NumberSelector />
    </div>
  );
}
