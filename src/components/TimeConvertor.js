import React, { useState } from "react";

function TimeConverter({ input, handleResult }) {
  const [unitA, setUnitA] = useState("");
  const [unitB, setUnitB] = useState("");

  const secondsToMinutes = (seconds) => seconds / 60;
  const minutesToSeconds = (minutes) => minutes * 60;
  const secondsToHours = (seconds) => seconds / 3600;
  const hoursToSeconds = (hours) => hours * 3600;
  const secondsToDays = (seconds) => seconds / 86400;
  const daysToSeconds = (days) => days * 86400;
  const minutesToHours = (minutes) => minutes / 60;
  const hoursToMinutes = (hours) => hours * 60;
  const minutesToDays = (minutes) => minutes / 1440;
  const daysToMinutes = (days) => days * 1440;
  const hoursToDays = (hours) => hours / 24;
  const daysToHours = (days) => days * 24;

  const handleConversion = () => {
    const value = parseFloat(input);
    if (isNaN(value)) {
      handleResult("Invalid input");
      return;
    }

    let convertedValue;

    switch (unitA) {
      case "s":
        switch (unitB) {
          case "min":
            convertedValue = secondsToMinutes(value);
            break;
          case "h":
            convertedValue = secondsToHours(value);
            break;
          case "d":
            convertedValue = secondsToDays(value);
            break;
          default:
            convertedValue = value;
        }
        break;
      case "min":
        switch (unitB) {
          case "s":
            convertedValue = minutesToSeconds(value);
            break;
          case "h":
            convertedValue = minutesToHours(value);
            break;
          case "d":
            convertedValue = minutesToDays(value);
            break;
          default:
            convertedValue = value;
        }
        break;
      case "h":
        switch (unitB) {
          case "s":
            convertedValue = hoursToSeconds(value);
            break;
          case "min":
            convertedValue = hoursToMinutes(value);
            break;
          case "d":
            convertedValue = hoursToDays(value);
            break;
          default:
            convertedValue = value;
        }
        break;
      case "d":
        switch (unitB) {
          case "s":
            convertedValue = daysToSeconds(value);
            break;
          case "min":
            convertedValue = daysToMinutes(value);
            break;
          case "h":
            convertedValue = daysToHours(value);
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
              <option value="s">Seconds (s)</option>
              <option value="min">Minutes (min)</option>
              <option value="h">Hours (h)</option>
              <option value="d">Days (d)</option>
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
              <option value="s">Seconds (s)</option>
              <option value="min">Minutes (min)</option>
              <option value="h">Hours (h)</option>
              <option value="d">Days (d)</option>
            </select>
          </label>
        </div>
      </section>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default TimeConverter;
