import React from "react";
import Card from "./components/Card";
import Button from "./components/button";

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
