import React from 'react';
import Filter from './components/Filter';
import Table from './components/Table';
import APIContextProvider from './context/APIContext';
import FilterContextProvider from './context/FilterContext';

function App() {
  return (
    <div>
      <APIContextProvider>
        <FilterContextProvider>
          <Filter />
          <Table />
        </FilterContextProvider>
      </APIContextProvider>
    </div>

  );
}

export default App;
