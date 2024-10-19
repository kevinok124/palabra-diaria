import React, { Fragment } from "react";
import Button from "./components/button";
import Search from "./components/input";
import Card from "./components/card";


function App() {
  return (
  <Fragment className="contenedor">
    <Search/>
    <Button text='click'/> 
    <Card/>
    
  </Fragment>


    
  );
};

export default App;
