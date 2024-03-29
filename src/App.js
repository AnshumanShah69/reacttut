import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{ useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [mode,setMode] = useState("light");///tells whether dark mode is enabled or not mode is default and setmode is after setting it asigns to mode
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({///alert is an object here
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }
  const toggleMode=()=>{
    if(mode === "light")
    {
      setMode("dark");
      document.body.style.backgroundColor="#16047a";
      showAlert("Dark mode has been enabled","success");
      // document.title="TextUtils-Dark Mode";
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("light mode has been enabled","success");
      // document.title="TextUtils-Light Mode";
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils2"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}></Route>
            <Route
               exact path="/" 
               element={ 
                <TextForm
                  showAlert={showAlert}
                  heading="TextUtils-WordCounter,Character counter,remove extra spaces "
                  mode={mode}
                />
               }
             ></Route> 
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
            }
export default App;