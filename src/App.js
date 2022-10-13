import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Stage from "./Components/stage";
import confetti from "canvas-confetti";

function App() {
  const [confettiStart, setConffetiStart] = useState(false);

  var colors = ["#8b5642", "#6a696b"];

  const end = Date.now() + 10000;

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

    if (Date.now() < end) {
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
      <Stage
        setConffetiStart={(value) => setConffetiStart(value)}
        confettiStart={confettiStart}
        frameHandler={(val) => frame(val)}
      />
    </div>
  );
}

export default App;
