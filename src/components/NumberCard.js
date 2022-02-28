import React, { useContext } from 'react';
import { NumberFilterContext } from '../context/NumberFilters';

export default function NumberCard() {
  const { numericValues, deleteFilterCard } = useContext(NumberFilterContext);
  return (
    <div>
      {numericValues.filterByNumericValues ? (
        numericValues.filterByNumericValues.map((card) => (
          <div key={ numericValues.length } data-testid="filter">
            {`${card.column} ${card.comparison} ${card.value}`}
            <button
              id={ card.column }
              onClick={ deleteFilterCard }
              type="button"
              data-testid="button-remove-filters"
            >
              X

            </button>
          </div>))) : (<h6> sem filtros selecionados </h6>
      )}
    </div>
  );
}
