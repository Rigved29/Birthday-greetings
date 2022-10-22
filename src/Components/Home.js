import React, { useRef } from "react";
import axios from "axios";

const Home = () => {
  const userNameRef = useRef();
  const birthdayPersonNameRef = useRef();

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
      withCredentials: true,
    };

    axios(config)
      .then((res) => {
        console.log(res);
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
    </div>
  );
};

export default Home;
