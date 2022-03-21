import React, { useState } from 'react';
import Nav from './Nav';
import TileList from './TileList';
import Filter from './Filter';
import HogSorter from './HogSorter';
import hogs from '../porkers_data';

function App() {
  const [greasedOnly, setGreasedOnly] = useState(false);

  function handleGreaseFilter() {
    setGreasedOnly((greasedOnly) => !greasedOnly);
  }

  return (
    <div className="App">
      <Nav />
      <Filter handleGreaseFilter={handleGreaseFilter} />
      <HogSorter />
      <TileList data={hogs} greasedOnly={greasedOnly} />
    </div>
  );
}

export default App;
