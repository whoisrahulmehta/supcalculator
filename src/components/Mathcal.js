import React, { useState } from "react";

function Mathcal() {
  const [inputVal, setInputVal] = useState(""); // Entered numbers with operator in between them

  const handleChange = (e) => {
    setInputVal(e.target.value);
  }; // Letting the values of input field change

  const handleClick = (e) => {
    setInputVal(inputVal.concat(e.target.name));
  }; // Setting the buttons name into the input field

  const handleClearAll = () => {
    setInputVal("");
  }; // Clear all input by setting input as empty

  const handleClearOne = () => {
    setInputVal((prev) => prev.slice(0, -1));
  }; // Popping last item from the input field

  const calculate = () => {
    try {
      setInputVal(eval(inputVal).toString());
    } catch (error) {
      setInputVal("Error");
    }
  }; // The calculator's main function to execute the calculations and perform the tasks

  const handleEnter = () => {
    calculate();
  }; // Depicting the enter button while calling the calculate function in it so that it calculates when the user wants to



  return (
    <>
     <main className="text-light">
     <section className="dynamicH text-light">
        Simple Mathematical Calculator
      </section>
      <div className="inputF text-light">
        <textarea
          placeholder="Enter the calculation here .. "
          onChange={handleChange}
          className="text-light"
          value={inputVal}
        ></textarea>
      </div>
        <div className="rows">
          <button className="items orange" name="+" onClick={handleClick}>
            +
          </button>
          <button className="items orange" name="-" onClick={handleClick}>
            -
          </button>
          <button className="items orange" name="/" onClick={handleClick}>
            /
          </button>
          <button className="items orange" name="*" onClick={handleClick}>
            x
          </button>
        </div>
        <div className="rows">
          <button className="items orange" name="%" onClick={handleClick}>
            R
          </button>
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
          <button className="items orange" onClick={handleEnter}>
            =
          </button>
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
      </main>

    </>
  );
}

export default Mathcal;
