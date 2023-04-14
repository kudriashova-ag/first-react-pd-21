import React, { useState } from 'react';

const ItemFilm = ({
  id,
  name,
  image,
  description,
  year,
  director,
  removeHandler,
}) => {
  let [showDetails, setShowDetails] = useState(false);

  const clickHanler = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <img src={image} alt={name} />
      <h3>{name}</h3>

      <button onClick={clickHanler}>
        {showDetails ? "Hide" : "Show"} details
      </button>
      {showDetails && <div>{description}</div>}

      <button onClick={()=>removeHandler(id)}>Delete</button>
    </div>
  );
};

export default ItemFilm;