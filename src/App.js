import React, { useState } from "react";
import "./App2.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

// import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode :( ", "danger");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#130823";
      showAlert("Dark mode has been enabled", "dark");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="Text Play" mode={mode} toggle={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter text to analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            ></Route>
          </Routes>
          {/* <TextForm heading="Enter your Text " mode={mode} /> */}
          {/* <About /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
