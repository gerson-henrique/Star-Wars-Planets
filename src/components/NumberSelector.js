import React, { useContext } from 'react';
import { NumberFilterContext } from '../context/NumberFilters';

export default function NumberSelector() {
  const { filterOptions } = useContext(NumberFilterContext);
  return (
    <div>
      <select data-testid="column-filter">
        {filterOptions.map((opt, id) => (
          <option key={ id } value={ opt }>{opt}</option>
        ))}
      </select>
      <select data-testid="comparison-filter">
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input type="number" value="0" data-testid="value-filter" />
      <button type="button" data-testid="button-filter"> Filter </button>
    </div>
  );
}
