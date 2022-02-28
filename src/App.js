import React from 'react';
import Filter from './components/Filter';
import NumberCard from './components/NumberCard';
import Table from './components/Table';
import APIContextProvider from './context/APIContext';
import FilterContextProvider from './context/FilterContext';
import NumberFilterContextProvider from './context/NumberFilters';

function App() {
  return (
    <div>
      <APIContextProvider>
        <FilterContextProvider>
          <NumberFilterContextProvider>
            <Filter />
            <NumberCard />
            <Table />
          </NumberFilterContextProvider>
        </FilterContextProvider>
      </APIContextProvider>
    </div>

  );
}

export default App;
