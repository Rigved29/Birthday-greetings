import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Stage from "./Components/stage";
import confetti from "canvas-confetti";

function App() {
  const [confettiStart, setConffetiStart] = useState(false);

  var colors = ["#8b5642", "#6a696b"];

  function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < Date.now() + 15000) {
      requestAnimationFrame(frame);
    }
  }

  // window.onload = frame();

  useEffect(() => {
    if (confettiStart) {
      frame();
      console.log("running");
    }
  }, [confettiStart]);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Stage
        setConffetiStart={(value) => setConffetiStart(value)}
        confettiStart={confettiStart}
      />
    </div>
  );
}

export default App;
