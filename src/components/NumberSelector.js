import React, { useContext } from 'react';
import { NumberFilterContext } from '../context/NumberFilters';

export default function NumberSelector() {
  const { filterOptions, createNewFilterObj } = useContext(NumberFilterContext);
  return (
    <div>
      <select id="column" data-testid="column-filter">
        {filterOptions.map((opt, id) => (
          <option key={ id } value={ opt }>{opt}</option>
        ))}
      </select>
      <select id="comparison" data-testid="comparison-filter">
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input id="number" type="number" value="0" data-testid="value-filter" />
      <button
        type="button"
        disabled={ !filterOptions.length }
        data-testid="button-filter"
        onClick={ createNewFilterObj }
      >
        Filter

      </button>
    </div>
  );
}
