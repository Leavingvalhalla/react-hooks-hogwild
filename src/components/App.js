import React, { useState } from 'react';
import Nav from './Nav';
import TileList from './TileList';
import Filter from './Filter';
import HogSorter from './HogSorter';
import hogs from '../porkers_data';

function App() {
  const [greasedOnly, setGreasedOnly] = useState(false);
  const [query, setQuery] = useState('');
  const [weightFilter, setWeightFilter] = useState(10);

  function handleGreaseFilter() {
    setGreasedOnly((greasedOnly) => !greasedOnly);
  }

  function handleNameSearch(e) {
    setQuery(e.target.value);
  }

  function handleWeightFilter(e) {
    setWeightFilter(e);
  }

  return (
    <div className="App">
      <Nav />
      <Filter handleGreaseFilter={handleGreaseFilter} />
      <HogSorter
        handleWeightFilter={handleWeightFilter}
        handleNameSearch={handleNameSearch}
        weightFilter={weightFilter}
      />
      <TileList
        data={hogs}
        greasedOnly={greasedOnly}
        weightFilter={weightFilter}
        query={query}
      />
    </div>
  );
}

export default App;
