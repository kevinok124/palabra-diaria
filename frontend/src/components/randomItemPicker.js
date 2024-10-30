import React, { useState, useEffect, useCallback } from "react";

const RandomItemPicker = () => {
    const [randomItem, setRandomItem] = useState(null);
    const [data, setData] = useState([]);

    // Función para seleccionar un elemento aleatorio
    const seleccionarElementoAleatorio = useCallback(() => {
        if (data.length === 0) return; // Verificar que datos no esté vacío
        let nuevoElemento;
        do {
            const randomIndex = Math.floor(Math.random() * data.length);
            nuevoElemento = data[randomIndex];
        } while (nuevoElemento === randomItem);
        setRandomItem(nuevoElemento);
    }, [data, randomItem]);

    useEffect(() => {
        // Realizar la solicitud al backend para obtener los datos
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/versiculos");
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        };

        fetchData();
    }, []); // Solo se ejecuta una vez al montar el componente

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
                                {randomItem.BookNumber}
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
        </div>
    );
};

export default RandomItemPicker;
