//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
//import About from './components/About';
//import textForm from './components/textForm';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//import {a} from './components/Form1';
function App() {

  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);

    },2000);
  }
  const toggleMode=()=>{
    if(mode === "light"){
     setMode("dark"); 
     document.body.style.backgroundColor="#042743";
     showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <div >
    
    <Navbar title="my app" dropDown="dropDown button1" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm heading="enter your text here" mode={mode} showAlert={showAlert}/>
    
    </div>
    
    
    </div>
  );
}

export default App;
