import React, { useState } from 'react';




function RandomItemPicker({ data }) {
  const [randomItem, setRandomItem] = useState(null);

  const getRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setRandomItem(data[randomIndex]);
  };

  return (
    <div>
      <button onClick={getRandomItem}>Obtener elemento aleatorio</button>
      {randomItem && (
        <div>
        <div className="card">
          <div className="card-overlay" />
          <div className="card-inner">
            {/* Aquí puedes mostrar las propiedades del elemento aleatorio */}
             <p>{randomItem.Book}</p>
             <p>{randomItem.Testament}</p>
             <p>{randomItem.Verse}</p>
             <p>{randomItem.Text}</p>
            {/* ... y así sucesivamente */}            
          </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RandomItemPicker;