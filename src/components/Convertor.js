import {
    faClockFour,
  faDirections,
  faTachometer,
  faTachometerAlt,
  faThermometer0,
  faTrashAlt,
  faWeightScale,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Tempcal from "./Tempcal";
import DistanceConverter from "./Distancecal";
import SpeedConverter from "./SpeedConvertor";
import TimeConverter from "./TimeConvertor";
import MassConverter from "./MassConvertor";

function Convertor() {
  const [inputval, setinputval] = useState("");
  const [result, setResult] = useState("Enter Value and select Parameters");

  const handleResult = (res) => {
    setResult(res);
  };
  const handleChange = (e) => {
    let input = e.target.value;
    setinputval(input);
  };
  const handleClear = () => {
    setinputval("");
    setResult('Enter New Value');
  };
  const handleClick = (e) => {
    setinputval(inputval.concat(e.target.name));
  }; // Setting the buttons name into the input field

  const handleClearAll = () => {
    setinputval("");
  }; // Clear all input by setting input as empty

  const handleClearOne = () => {
    setinputval((prev) => prev.slice(0, -1));
  }; // Popping last item from the input field


  return (
    <>
      <main>
        <section className="inputF">
          <input
            type="text"
            placeholder=" ..Enter a value and select conversion parameters "
            className="text-light"
            value={inputval}
            onChange={handleChange}
          />
          <span className="btn clrbtn text-light " onClick={handleClear}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </span>
        </section>
        <section className="outputF orderL text-light">
          <p>{result}</p>
        </section>
        <section className="dynamicH text-light">
          Multi purpose Convertor
        </section>
         <section className="rotuing">
          <div className="buttons"> 
          <div className="rows">
          <button className="items" name="7" onClick={handleClick}>
            7
          </button>
          <button className="items" name="8" onClick={handleClick}>
            8
          </button>
          <button className="items" name="9" onClick={handleClick}>
            9
          </button>
        </div>
        <div className="rows">
          <button className="items orange" onClick={handleClearOne}>
            C
          </button>
          <button className="items" name="4" onClick={handleClick}>
            4
          </button>
          <button className="items" name="5" onClick={handleClick}>
            5
          </button>
          <button className="items" name="6" onClick={handleClick}>
            6
          </button>
        </div>
        <div className="rows">
          <button className="items orange" onClick={handleClearAll}>
            AC
          </button>
          <button className="items" name="2" onClick={handleClick}>
            2
          </button>
          <button className="items" name="3" onClick={handleClick}>
            3
          </button>
          <button className="items" name="1" onClick={handleClick}>
            1
          </button>
        </div>
        <div className="rows">
          <button className="items" name="." onClick={handleClick}>
            .
          </button>
          <button className="items" name="0" onClick={handleClick}>
            0
          </button>
          <button className="items" name="00" onClick={handleClick}>
            00
          </button>
        </div>

          </div>
          <div className="display">
          <Routes>
            <Route
              path="temperature"
              element={<Tempcal input={inputval} handleResult={handleResult} />}
            />
            <Route
              path="distance"
              element= {<DistanceConverter input={inputval} handleResult={handleResult} />}
            />
             <Route
              path="speed"
              element= {<SpeedConverter input={inputval} handleResult={handleResult} />}
            />
            <Route
              path="time"
              element= {<TimeConverter input={inputval} handleResult={handleResult} />}
            />
            <Route
              path="mass"
              element= {<MassConverter input={inputval} handleResult={handleResult} />}
            />
          </Routes>
          </div>
         </section>
      </main>
      <footer className="text-light">
        <p className="cal  orderL">
         <NavLink to='temperature'>
         <span>Temperature </span>
          <span className="gold">
            <FontAwesomeIcon icon={faThermometer0} />
          </span>
         </NavLink>
        </p>
        <p className="cal orderF">
       <NavLink to="distance">
       <span>Distance </span>
          <span className="gold">
            <FontAwesomeIcon icon={faDirections} />
          </span>
       </NavLink>
        </p>
        <p className="cal ">
        <NavLink to="speed">
       <span>Speed </span>
          <span className="gold">
            <FontAwesomeIcon icon={faTachometerAlt} />
          </span>
       </NavLink>
        </p>
        <p className="cal ">
        <NavLink to="time">
       <span>Time </span>
          <span className="gold">
            <FontAwesomeIcon icon={faClockFour} />
          </span>
       </NavLink>
        </p>
        <p className="cal ">
        <NavLink to="mass">
       <span>Mass </span>
          <span className="gold">
            <FontAwesomeIcon icon={faWeightScale} />
          </span>
       </NavLink>
        </p>
        <p className="cal ">
         New Features <span className="gold">I</span>
        </p>
        <p className="cal ">
           Co   ming soon <span className="gold">I</span>
        </p>
      </footer>
    </>
  );
}

export default Convertor;
