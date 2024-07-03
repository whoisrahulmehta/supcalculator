import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Loading() {
  return (
    <div className="App-loading">
      <div className = "logo">
        <span> supcalculator + </span>
        <b>+</b>
      </div>
    </div>
  );
}

export default Loading;
