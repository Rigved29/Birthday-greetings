import { useEffect, useState } from "react";
import "./App.css";
import Stage from "./Components/stage";
import confetti from "canvas-confetti";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import axios from "axios";
import { useParams } from "react-router-dom";

const BirthdayAnime = () => {
  const [confettiStart, setConffetiStart] = useState(false);
  const [birthdayPersonName, setBirthdayPersonName] = useState("");

  var colors = ["#8b5642", "#6a696b"];

  const end = Date.now() + 5000;

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

  const { id: userId } = useParams();

  useEffect(() => {
    console.log("USERID", userId);

    const config = {
      method: "GET",
      url: `http://localhost:8000/userInfo/${userId}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setBirthdayPersonName(res.data.birthdayPersonName);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Stage
        setConffetiStart={(value) => setConffetiStart(value)}
        confettiStart={confettiStart}
        frameHandler={(val) => frame(val)}
        name={birthdayPersonName}
      />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/greetings/:id" element={<BirthdayAnime />} />
    </Routes>
  );
}

export default App;
