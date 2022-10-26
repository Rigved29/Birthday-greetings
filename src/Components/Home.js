import React, { useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const userNameRef = useRef();
  const birthdayPersonNameRef = useRef();

  const [birthdayPersonData, setBirthdayPersonData] = useState("");
  const [showLink, setShowLink] = useState(false);

  const generateLinkHandler = () => {
    const config = {
      method: "POST",
      url: "http://localhost:8000/userlink",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        userName: userNameRef.current.value,
        birthdayPersonName: birthdayPersonNameRef.current.value,
      },
      // withCredentials: true,
    };

    axios(config)
      .then((res) => {
        console.log(res);
        setBirthdayPersonData(res.data);
        setShowLink(true);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  return (
    <div>
      <form>
        <input type="text" placeholder="Your Name" ref={userNameRef} />
        <input
          type="text"
          placeholder="birthday person Name"
          ref={birthdayPersonNameRef}
        />
        <button type="button" onClick={generateLinkHandler}>
          Submit
        </button>
      </form>
      {showLink && (
        <h3>
          <Link
            to={`greetings/${birthdayPersonData._id}`}
          >{`http://localhost:3000/${birthdayPersonData._id}`}</Link>
        </h3>
      )}
    </div>
  );
};

export default Home;
