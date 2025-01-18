import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('Light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'Light') {
      setMode('dark');
      document.body.style.backgroundColor = '#05073E';
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode('Light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Text Analyser" aboutUs="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        
        <div className="container my-3">
          <Routes>
            {/* Default route (Home page) */}
            <Route path="/" element= {<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />} />
            
            {/* About page route */}
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
