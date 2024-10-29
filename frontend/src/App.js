import './index.css';



import RandomItemPicker from "./components/randomItemPicker";
import myData from "./Schema.json"


function App() {



  return (
 
    <div className="contenedor">
    <div className='title'>
      <h1>
        PALABRA DIARIA
      </h1>
    </div>
      <RandomItemPicker data={myData}/>
    </div>  
    

  );
};

export default App;
