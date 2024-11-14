import "./index.css";
import RandomItemPicker from "./components/randomItemPicker";
import myData from "./Schema.json";
// import ButtonComponent from "./components/ButtonComponent";




function App() {
  return (
    <div className="contenedor">
      <div className="title">
        <h1>PALABRA DIARIA</h1>
      </div>
      <div className="contenedor_button">    
          <RandomItemPicker data={myData}/>
          {/* <ButtonComponent/> */}
      </div>
    </div>
  );
}

export default App;
