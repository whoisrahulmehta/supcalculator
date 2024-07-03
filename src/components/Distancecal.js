import React, { useState } from "react";

function DistanceConverter({ input, handleResult }) {
  const [unitA, setUnitA] = useState("");
  const [unitB, setUnitB] = useState("");

  // Conversion functions
  const metersToKilometers = (meters) => meters / 1000;
  const kilometersToMeters = (kilometers) => kilometers * 1000;
  const metersToFeet = (meters) => meters * 3.28084;
  const feetToMeters = (feet) => feet / 3.28084;
  const metersToMiles = (meters) => meters / 1609.34;
  const milesToMeters = (miles) => miles * 1609.34;
  const metersToInches = (meters) => meters * 39.3701;
  const inchesToMeters = (inches) => inches / 39.3701;
  const feetToMiles = (feet) => feet / 5280;
  const milesToFeet = (miles) => miles * 5280;
  const kilometersToMiles = (kilometers) => kilometers / 1.60934;
  const milesToKilometers = (miles) => miles * 1.60934;
  const feetToInches = (feet) => feet * 12;
  const inchesToFeet = (inches) => inches / 12;
  const kilometersToFeet = (kilometers) => kilometers * 3280.84;
  const feetToKilometers = (feet) => feet / 3280.84;
  const kilometersToInches = (kilometers) => kilometers * 39370.1;
  const inchesToKilometers = (inches) => inches / 39370.1;
  const milesToInches = (miles) => miles * 63360;
  const inchesToMiles = (inches) => inches / 63360;

  const handleConversion = () => {
    const value = parseFloat(input);
    if (isNaN(value)) {
      handleResult("Invalid input");
      return;
    }

    let convertedValue;

    switch (unitA) {
      case "m":
        switch (unitB) {
          case "km":
            convertedValue = metersToKilometers(value);
            break;
          case "ft":
            convertedValue = metersToFeet(value);
            break;
          case "mi":
            convertedValue = metersToMiles(value);
            break;
          case "in":
            convertedValue = metersToInches(value);
            break;
          default:
            convertedValue = value;
        }
        break;
      case "km":
        switch (unitB) {
          case "m":
            convertedValue = kilometersToMeters(value);
            break;
          case "ft":
            convertedValue = kilometersToFeet(value);
            break;
          case "mi":
            convertedValue = kilometersToMiles(value);
            break;
          case "in":
            convertedValue = kilometersToInches(value);
            break;
          default:
            convertedValue = value;
        }
        break;
      case "ft":
        switch (unitB) {
          case "m":
            convertedValue = feetToMeters(value);
            break;
          case "km":
            convertedValue = feetToKilometers(value);
            break;
          case "mi":
            convertedValue = feetToMiles(value);
            break;
          case "in":
            convertedValue = feetToInches(value);
            break;
          default:
            convertedValue = value;
        }
        break;
      case "mi":
        switch (unitB) {
          case "m":
            convertedValue = milesToMeters(value);
            break;
          case "km":
            convertedValue = milesToKilometers(value);
            break;
          case "ft":
            convertedValue = milesToFeet(value);
            break;
          case "in":
            convertedValue = milesToInches(value);
            break;
          default:
            convertedValue = value;
        }
        break;
      case "in":
        switch (unitB) {
          case "m":
            convertedValue = inchesToMeters(value);
            break;
          case "km":
            convertedValue = inchesToKilometers(value);
            break;
          case "ft":
            convertedValue = inchesToFeet(value);
            break;
          case "mi":
            convertedValue = inchesToMiles(value);
            break;
          default:
            convertedValue = value;
        }
        break;
      default:
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
          <label htmlFor="unitA">
            <select
              id="unitA"
              value={unitA}
              onChange={(e) => setUnitA(e.target.value)}
            >
              <option value="">Select initial unit</option>
              <option value="m">Meters (m)</option>
              <option value="km">Kilometers (km)</option>
              <option value="ft">Feet (ft)</option>
              <option value="mi">Miles (mi)</option>
              <option value="in">Inches (in)</option>
            </select>
          </label>
        </div>
        <div>TO</div>
        <div className="to">
          <label htmlFor="unitB">
            <select
              id="unitB"
              value={unitB}
              onChange={(e) => setUnitB(e.target.value)}
            >
              <option value="">Select final unit</option>
              <option value="m">Meters (m)</option>
              <option value="km">Kilometers (km)</option>
              <option value="ft">Feet (ft)</option>
              <option value="mi">Miles (mi)</option>
              <option value="in">Inches (in)</option>
            </select>
          </label>
        </div>
      </section>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default DistanceConverter;
