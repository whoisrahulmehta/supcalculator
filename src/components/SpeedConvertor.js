import React, { useState } from "react";

function SpeedConverter({ input, handleResult }) {
  const [unitA, setUnitA] = useState("");
  const [unitB, setUnitB] = useState("");

  const metersPerSecondToKilometersPerHour = (mps) => mps * 3.6;
  const kilometersPerHourToMetersPerSecond = (kmh) => kmh / 3.6;
  const metersPerSecondToMilesPerHour = (mps) => mps * 2.23694;
  const milesPerHourToMetersPerSecond = (mph) => mph / 2.23694;
  const metersPerSecondToFeetPerSecond = (mps) => mps * 3.28084;
  const feetPerSecondToMetersPerSecond = (fps) => fps / 3.28084;
  const kilometersPerHourToMilesPerHour = (kmh) => kmh / 1.60934;
  const milesPerHourToKilometersPerHour = (mph) => mph * 1.60934;
  const kilometersPerHourToFeetPerSecond = (kmh) => kmh / 1.09728;
  const feetPerSecondToKilometersPerHour = (fps) => fps * 1.09728;
  const milesPerHourToFeetPerSecond = (mph) => mph * 1.46667;
  const feetPerSecondToMilesPerHour = (fps) => fps / 1.46667;

  const handleConversion = () => {
    const value = parseFloat(input);
    if (isNaN(value)) {
      handleResult("Invalid input");
      return;
    }

    let convertedValue;

    switch (unitA) {
      case "m/s":
        switch (unitB) {
          case "km/h":
            convertedValue = metersPerSecondToKilometersPerHour(value);
            break;
          case "mph":
            convertedValue = metersPerSecondToMilesPerHour(value);
            break;
          case "ft/s":
            convertedValue = metersPerSecondToFeetPerSecond(value);
            break;
          default:
            convertedValue = value;
        }
        break;
      case "km/h":
        switch (unitB) {
          case "m/s":
            convertedValue = kilometersPerHourToMetersPerSecond(value);
            break;
          case "mph":
            convertedValue = kilometersPerHourToMilesPerHour(value);
            break;
          case "ft/s":
            convertedValue = kilometersPerHourToFeetPerSecond(value);
            break;
          default:
            convertedValue = value;
        }
        break;
      case "mph":
        switch (unitB) {
          case "m/s":
            convertedValue = milesPerHourToMetersPerSecond(value);
            break;
          case "km/h":
            convertedValue = milesPerHourToKilometersPerHour(value);
            break;
          case "ft/s":
            convertedValue = milesPerHourToFeetPerSecond(value);
            break;
          default:
            convertedValue = value;
        }
        break;
      case "ft/s":
        switch (unitB) {
          case "m/s":
            convertedValue = feetPerSecondToMetersPerSecond(value);
            break;
          case "km/h":
            convertedValue = feetPerSecondToKilometersPerHour(value);
            break;
          case "mph":
            convertedValue = feetPerSecondToMilesPerHour(value);
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
              <option value="m/s">Meters per Second (m/s)</option>
              <option value="km/h">Kilometers per Hour (km/h)</option>
              <option value="mph">Miles per Hour (mph)</option>
              <option value="ft/s">Feet per Second (ft/s)</option>
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
              <option value="m/s">Meters per Second (m/s)</option>
              <option value="km/h">Kilometers per Hour (km/h)</option>
              <option value="mph">Miles per Hour (mph)</option>
              <option value="ft/s">Feet per Second (ft/s)</option>
            </select>
          </label>
        </div>
      </section>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default SpeedConverter;
