import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./home.css";
import { ReactComponent as Tick } from "../Images/tick.svg";

//component
import Loader from "./Loader";

const Home = () => {
  const userNameRef = useRef();
  const birthdayPersonNameRef = useRef();

  const [birthdayPersonData, setBirthdayPersonData] = useState("");
  const [showLink, setShowLink] = useState(false);
  const [copiedState, setCopiedState] = useState(false);
  const [userNameError, setUserNameError] = useState("");
  const [birthdayPersonNameError, setBirthdayPersonNameError] = useState("");
  const [error1, setError1] = useState(true);
  const [error2, setError2] = useState(true);
  const [hideLoader, setHideLoader] = useState(false);
  const [resError, setResError] = useState(false);

  const generateLinkHandler = () => {
    console.log(process.env.REACT_APP_API_URL);

    const config = {
      method: "POST",
      // url: "http://localhost:8000/userlink",
      url: `${process.env.REACT_APP_API_URL}userlink`,
      // url: `/userlink`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        userName: userNameRef.current.value,
        birthdayPersonName: birthdayPersonNameRef.current.value,
      },
      withCredentials: true,
    };

    axios(config)
      .then((res) => {
        console.log(res);
        setBirthdayPersonData(res.data);
        setShowLink(true);
        userNameRef.current.value = "";
        birthdayPersonNameRef.current.value = "";
        setResError(false);
        setError1(true);
        setError2(true);
      })
      .catch((err) => {
        console.log("ERROR", err);
        setShowLink(false);
        setResError(true);
      });
  };

  console.log(process.env.REACT_APP_API_URL);

  useEffect(() => {}, [userNameRef, birthdayPersonNameRef]);

  const checkUserNameError = () => {
    if (userNameRef.current.value.length === 0) {
      setUserNameError("required");
      setError1(true);
    } else if (
      userNameRef.current.value.length < 3 ||
      userNameRef.current.value.length > 30
    ) {
      setUserNameError("name should be between 3 to 30 characters");
      setError1(true);
    } else {
      setUserNameError("");
      setError1(false);
    }
  };

  useEffect(() => {
    if (showLink) {
      setTimeout(() => {
        setHideLoader(true);
        console.log("running");
      }, 3000);
    }
  }, [showLink]);

  const checkBirthdayPersonNameError = () => {
    if (birthdayPersonNameRef.current.value.length === 0) {
      setBirthdayPersonNameError("required");
      setError2(true);
    } else if (
      birthdayPersonNameRef.current.value.length < 3 ||
      birthdayPersonNameRef.current.value.length > 30
    ) {
      setBirthdayPersonNameError("name should be between 3 to 30 characters");
      setError2(true);
    } else {
      setBirthdayPersonNameError("");
      setError2(false);
    }
  };

  return (
    <main className="home-main">
      <div className="headline-div">
        <h1 className="headline">Wish Birthday</h1>
        <h1 className="headline">
          to your loved ones <span>🥳🎈</span>
        </h1>
      </div>

      <div className="home">
        <motion.form>
          <h2>Generate sharable Link </h2>
          <input
            type="text"
            placeholder="Your Name"
            ref={userNameRef}
            onBlur={checkUserNameError}
          />
          {userNameError !== "" && (
            <span className="error">{userNameError}</span>
          )}
          <input
            type="text"
            placeholder="birthday person Name"
            ref={birthdayPersonNameRef}
            onBlur={checkBirthdayPersonNameError}
          />
          {birthdayPersonNameError !== "" && (
            <span className="error">{birthdayPersonNameError}</span>
          )}
          <button
            type="button"
            onClick={generateLinkHandler}
            disabled={error1 || error2}
          >
            Submit
          </button>
        </motion.form>
        {showLink ? (
          hideLoader ? (
            <motion.div
              className="linkDiv"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.5, type: "tween" },
              }}
            >
              <Link
                to={`/greetings/${birthdayPersonData._id}`}
                className="shareLink"
              >{`${process.env.REACT_APP_HOST}/greetings/${birthdayPersonData._id}`}</Link>

              <span
                className="copyBtn"
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${process.env.REACT_APP_HOST}/greetings/${birthdayPersonData._id}`
                  );
                  setCopiedState(true);
                }}
              >
                {copiedState ? <Tick /> : "copy"}
              </span>
            </motion.div>
          ) : (
            <Loader />
          )
        ) : (
          resError && (
            <div className="errorDiv">
              <h1>ERROR</h1>
              <p className="error">check your internet connection..😔</p>
            </div>
          )
        )}
      </div>
    </main>
  );
};

export default Home;
