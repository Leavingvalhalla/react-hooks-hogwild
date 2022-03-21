import React from 'react';
import Tile from './Tile';

function TileList({ data, greasedOnly, weightFilter, query }) {
  return data
    .filter((hog) => weightFilter < hog.weight < weightFilter)
    .filter((hog) => (greasedOnly ? hog.greased : true))
    .filter((hog) => hog.name.toLowerCase().includes(query.toLowerCase()))
    .map((hog) => <Tile key={hog.name} data={hog} />);
}

export default TileList;
