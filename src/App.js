import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';
// import Abt from './components/Abt';
// import {
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  //dark mode feature 
  const [Mode, setMode] = useState('light');
  

  let toggleMode=()=>{
    if(Mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#212529';
    document.body.style.color = 'white';
    showAlert("Dark mode has been enabled", "success ")
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    showAlert("Light mode has been enabled", "success ")
    }
  }
  //alert section
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
   setAlert({
    msg: message,
    type: type
   })
   setTimeout(() => {
    setAlert(null)
   }, 15000);
  }



  return (
    <>
      <Navbar  title='TextUtils' aboutText="About" mode={Mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">

        <div>
      {/* <Routes> */}
          {/* <Route exact path="/" element={<Form showAlert={showAlert} heading="Enter text to analyze" title="TextUtils" aboutText="About Us" mode="light" />} /> */}
          {/* <Route exact path="/Abt" element={<Abt mode={Mode}/>} /> */}
            
          
            
          
        {/* </Routes> */}
        <Form showAlert={showAlert} heading="Enter text to analyze" title="TextUtils" aboutText="About Us" mode="light" />
      </div>
  
      </div>
    </>
  );
}

export default App;
