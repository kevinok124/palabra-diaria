import './index.css';



import RandomItemPicker from "./components/randomItemPicker";
import myData from "./Schema.json"


function App() {



  return (
 
    <div className="contenedor">
      <RandomItemPicker data={myData}/>
    </div>  
    

  );
};

export default App;
