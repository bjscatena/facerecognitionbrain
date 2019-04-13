import React from "react";
import Tilt from "react-tilt";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma3">
      <Tilt
        className="Tilt pa4 br-100 shadow-2 flex items-center justify-center"
        options={{ max: 100 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          <img src={brain} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
