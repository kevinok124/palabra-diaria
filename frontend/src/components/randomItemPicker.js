import React, { useState, useEffect } from "react";

const RandomItemPicker = () => {
  const [randomItem, setRandomItem] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Realizar la solicitud al backend para obtener los datos
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/versiculos");
        const result = await response.json();
        setData(result);
        if (result.length > 0) {
          seleccionarElementoAleatorio(result);
        }
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  const seleccionarElementoAleatorio = (datos = data) => {
    if (datos.length === 0) return; // Verificar que datos no esté vacío
    let nuevoElemento;
    do {
      const randomIndex = Math.floor(Math.random() * datos.length);
      nuevoElemento = datos[randomIndex];
    } while (nuevoElemento === randomItem);
    setRandomItem(nuevoElemento);
  };

  return (
    <div>
      <button onClick={seleccionarElementoAleatorio}>
        Obtener elemento aleatorio
      </button>
      {randomItem && (
        <div>
          <div className="card">
       
            <div className="card-inner">
              <p>
                <strong>Número: </strong>
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
                <strong>Número de libro: </strong>
                {randomItem.BoookNumber}
              </p>
              <p>
                <strong>Versículo: </strong>
                {randomItem.Verse}
              </p>
              <p>
                <strong>Palabra diaria: </strong>
                {randomItem.Text}
              </p>
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
