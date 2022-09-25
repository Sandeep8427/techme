import React, { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert(" Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Utility'
      // }, 1500);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now'
      // }, 1000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  // const toggleModeGreen = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = " rgba(31, 50, 2, 0.5)";
  //     showAlert(' Dark mode has been enabled','success')
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert(' Light mode has been enabled','success')
  //   }
  // };
  // const toggleModeBlue = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "rgba(5, 55, 89, 0.777)";
  //     showAlert(' Dark mode has been enabled','success')
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert(' Light mode has been enabled','success')
  //   }
  // };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          // toggleModeBlue={toggleModeBlue}
          // toggleModeGreen={toggleModeGreen}
        />

        <Alert alert={alert} />
        <div className="container  my-3">
          <Routes>
            <Route
              exact path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />

            <Route
              exact path="/home"
              element={
                <TextForm
                  heading="Enter the text to analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
