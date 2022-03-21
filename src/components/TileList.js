import React from 'react';
import Tile from './Tile';

function TileList({ data, greasedOnly }) {
  return data
    .filter((hog) => (greasedOnly ? hog.greased : true))
    .map((hog) => <Tile key={hog.name} data={hog} />);
}

export default TileList;
