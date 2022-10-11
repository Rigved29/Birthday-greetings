import React from "react";
import "./birthdayCake.css";
import cake from "../Images/cake.svg";

const BirthdayCake = () => {
  return (
    <>
      <div class="velas">
        <div class="fuego"></div>
        <div class="fuego"></div>
        <div class="fuego"></div>
        <div class="fuego"></div>
        <div class="fuego"></div>
      </div>
      <img src={cake} alt="cake" />
      {/* <div class="text">
        <h1>happy birthday!</h1>
        <p>Jonas</p>
      </div> */}
    </>
  );
};

export default BirthdayCake;
