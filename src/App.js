import { useEffect, useState } from "react";
import "./App.css";
import Stage from "./Components/stage";
import confetti from "canvas-confetti";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "./Components/Loader";

const BirthdayAnime = () => {
  const [confettiStart, setConffetiStart] = useState(false);
  const [birthdayPersonName, setBirthdayPersonName] = useState("");
  const [error, setError] = useState("");

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
    }
  }, [confettiStart]);

  const { id: userId } = useParams();

  useEffect(() => {

    console.log(process.env.REACT_APP_API_URL);

    const config = {
      method: "GET",
      // url: `http://localhost:8000/userInfo/${userId}`,
      url: `${process.env.REACT_APP_API_URL}userInfo/${userId}`,
      // url: `/userInfo/${userId}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    let resStatus;

    axios(config)
      .then((res) => {
        if (res.status === 200) {
          resStatus = res.status;
          setBirthdayPersonName(res.data.birthdayPersonName);
          setError("");
        } else if (res.status === 404) {
          resStatus = res.status;
          setError("not found");
        }
      })
      .catch((err) => {
        setError("not found");

      });
  }, []);


  return (
    <div className="App">
      {error === "" ? (
        birthdayPersonName !== "" ? (
          <Stage
            setConffetiStart={(value) => setConffetiStart(value)}
            confettiStart={confettiStart}
            frameHandler={(val) => frame(val)}
            name={birthdayPersonName}
          />
        ) : (
          <div className="stageLoader">
            <Loader />
          </div>
        )
      ) : (
        <div className="errorDiv">
          <h1>404</h1>
          <p className="error">
            No birthday person found with these credentials..😔
          </p>
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/greetings/:id" element={<BirthdayAnime />} />
      {/* <Route exact path="/" element={<BirthdayAnime />} /> */}
    </Routes>
  );
}

export default App;
