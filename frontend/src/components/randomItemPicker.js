import React, { useState, useEffect } from "react";
import myData from "../Schema.json";

// const jsonData = [
//   {Index:10},
//   {Index:20},
//   {Index:30},
//   {Index:40},
// ];

const RandomItemPicker = () => {
  const [randomItem, setRandomItem] = useState(null);

  const seleccionarElementoAleatorio = () => {
    let nuevoElemento;
    do {
      const randomIndex = Math.floor(Math.random() * myData.length);
      nuevoElemento = myData[randomIndex];
    } while (nuevoElemento === randomItem);
    setRandomItem(nuevoElemento);
  };

  useEffect(() => {
    seleccionarElementoAleatorio();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
    
      {randomItem && (
        <div>
          <div className="card">
       
            <div className="card-inner">
              {/* Aquí puedes mostrar las propiedades del elemento aleatorio */}
              <p>
                <strong>Numero: </strong>
                {randomItem.Index}
              </p>
              <p>
                <strong>Testamento: </strong>
                {randomItem.Testament}
              </p>
              <p>
                <strong>Libro: </strong>
                {randomItem.Book}
              </p>
              <p>
                <strong>Numero de libro: </strong>
                {randomItem.BoookNumber}
              </p>
              <p>
                <strong>Versiculo: </strong>
                {randomItem.Verse}
              </p>{" "}
              <p>
                <strong>Palabra diaria: </strong>
                {randomItem.Text}
              </p>
              {/* ... y así sucesivamente */}
            </div>
          </div>
        </div>
      )}

      <button onClick={seleccionarElementoAleatorio}>
        Random
      </button>
      
    </div>
  );
};

export default RandomItemPicker;
