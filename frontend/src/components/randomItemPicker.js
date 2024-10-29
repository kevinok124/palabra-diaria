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
<<<<<<< HEAD
                <strong>Numero: </strong>
=======
                <strong>Número: </strong>
>>>>>>> 6b59f1673651fd197079999dd5fa164e05b067f6
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
<<<<<<< HEAD
                <strong>Numero de libro: </strong>
                {randomItem.BoookNumber}
              </p>
              <p>
                <strong>Versiculo: </strong>
=======
                <strong>Número de libro: </strong>
                {randomItem.BoookNumber}
              </p>
              <p>
                <strong>Versículo: </strong>
>>>>>>> 6b59f1673651fd197079999dd5fa164e05b067f6
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
