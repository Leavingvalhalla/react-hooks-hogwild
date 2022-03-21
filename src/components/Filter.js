import React from 'react';

function Filter({ handleGreaseFilter }) {
  return (
    <div>
      <label for="greasefilter">Only show greased hogs</label>
      <input
        onChange={handleGreaseFilter}
        type="checkbox"
        name="greaseFilter"
      />
    </div>
  );
}

export default Filter;
