import { useState, useEffect } from "react";
import Home from "./components/Home";
import MainPage from "./components/MainPage";
import "./App.css";

function App() {
  const [windowSize, setWindowSize] = useState({
    windowWidth: 0,
    windowHeight: 0,
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const updateDimensions = () => {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    setWindowSize({ windowWidth, windowHeight });
  };

  const { windowWidth } = windowSize;
  return (
    <div className="App">
      {!isLoggedIn ? (
        <Home logingSetter={setIsLoggedIn} windowWidth={windowWidth} />
      ) : (
        <MainPage logingSetter={setIsLoggedIn} windowWidth={windowWidth} />
      )}
    </div>
  );
}

export default App;
