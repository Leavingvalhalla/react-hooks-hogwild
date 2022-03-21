import React, { useState } from 'react';

function Tile({ data }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked((isClicked) => !isClicked);
  }

  return (
    <div onClick={handleClick} className="ui card">
      <div className="image">
        <img src={data.image} alt={data.name} />
      </div>
      <div className="content">
        <p className="header">{data.name}</p>
      </div>
      {isClicked ? (
        <div className="extra content">
          <p>{`specialty: ${data.specialty}`}</p>
          <p>{`weight: ${data.weight}`}</p>
          <p>{`greased: ${data.greased}`}</p>
          <p>{`highest medal achieved: ${data['highest medal achieved']}`} </p>
        </div>
      ) : null}
    </div>
  );
}

export default Tile;
