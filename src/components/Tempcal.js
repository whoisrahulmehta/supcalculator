import React, { useEffect, useState } from "react";

function Tempcal({ input, handleResult }) {
  const [unitA, setUnitA] = useState("");
  const [unitB, setUnitB] = useState("");

  const fahrenheitToKelvin = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9 + 273.15;
  };

  const kelvinToFahrenheit = (kelvin) => {
    return ((kelvin - 273.15) * 9) / 5 + 32;
  };

  const fahrenheitToCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  const celsiusToKelvin = (celsius) => {
    return celsius + 273.15;
  };

  const handleConversion = () => {
    const value = parseFloat(input);
    if (isNaN(value)) {
      handleResult("Invalid input");
      return;
    }

    let convertedValue;

    if (unitA === "C" && unitB === "F") {
      convertedValue = celsiusToFahrenheit(value);
    } else if (unitA === "C" && unitB === "K") {
      convertedValue = celsiusToKelvin(value);
    } else if (unitA === "F" && unitB === "C") {
      convertedValue = fahrenheitToCelsius(value);
    } else if (unitA === "F" && unitB === "K") {
      convertedValue = fahrenheitToKelvin(value);
    } else if (unitA === "K" && unitB === "C") {
      convertedValue = kelvinToCelsius(value);
    } else if (unitA === "K" && unitB === "F") {
      convertedValue = kelvinToFahrenheit(value);
    } else {
      convertedValue = value;
    }

    handleResult(convertedValue);
  };

  const handleSubmit = () => {
    handleConversion();
  };

  return (
    <>
      <section className="dynamicC text-light">
        <div className="from">
          <label htmlFor="category">
            <select
              id="mySelect"
              value={unitA}
              onChange={(e) => setUnitA(e.target.value)}
            >
              <option value="NA"> Select initial unit </option>
              <option value="C">Celsius (°C)</option>
              <option value="F">Fahrenheit (°F)</option>
              <option value="K">Kelvin (K)</option>
            </select>
          </label>
        </div>
        <div className="">TO</div>
        <div className="to">
          <label htmlFor="category">
            <select
              id="mySelect"
              value={unitB}
              onChange={(e) => setUnitB(e.target.value)}
            >
              <option value="NA"> Select final unit </option>
              <option value="C">Celsius (°C)</option>
              <option value="F">Fahrenheit (°F)</option>
              <option value="K">Kelvin (K)</option>
            </select>
          </label>
        </div>
      </section>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Tempcal;
