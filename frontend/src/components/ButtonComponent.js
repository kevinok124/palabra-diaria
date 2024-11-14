import React, { useState } from 'react';

function ButtonComponent() {
  // Define el estado para controlar la visibilidad del botón
  const [isVisible, setIsVisible] = useState(true);

  // Función para ocultar el botón
  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <div>
      {isVisible && (
        <button onClick={handleClick}>Haz clic para ocultarme</button>
      )}

      
    </div>
    
  );
}

export default ButtonComponent;
