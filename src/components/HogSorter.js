import React from 'react';

function HogSorter() {
  return (
    <div>
      <p>Sort hogs by:</p>
      <label for="weight">Weight (this number or less)</label>
      <select name="weight" id="weight">
        <option value="10">Pick weight</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <label for="name">Name</label>
      <select name="name" id="name">
        option
      </select>
    </div>
  );
}

export default HogSorter;
