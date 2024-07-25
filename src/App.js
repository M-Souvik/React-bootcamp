import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  const [mode,setMode] = useState('light');//Whether dark mode is enable
  const [alert,setAlert] = useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);

    },2000);
  }
  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#0b0b0ede';
      showAlert("Dark mode has been enabled","success");
      document.title = 'Text-0-meter(dark)';
      // setInterval(() => {
      //   document.title = 'Text-0-meter is amazing';
      // }, 2000);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
      document.title = 'Text-0-meter';
    }
    }
    
  return (
    <>
    <Router>
        <Navbar title="Text-O-Meter" Home="Home" about="About" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        {/* <Navbar/> */}
        {/* /users ---> component1
        /users/home ---> ---> component2 */}
        <Routes>
          <Route index element={<Textform showAlert={showAlert} formtitle="Enter the text in textarea to analyse" mode={mode}/>}/>
          <Route path="/about" element={<About mode={mode}/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
