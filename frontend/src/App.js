import React from "react";
import Card from "./Components/Card";
import Button from "./Components/button";

function App() {
  return (
    <><div className="contenedor">
      <Card />
    </div>

    <div className="contenedorDos">
        <Button text= "Random"/>
        <Button text= "Click"/>
    </div></>
  );
}

export default App;
