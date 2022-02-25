import React from 'react';
import Table from './components/Table';
import APIContextProvider from './context/APIContext';

function App() {
  return (
    <div>
      <APIContextProvider>
        <Table />
      </APIContextProvider>
    </div>

  );
}

export default App;
