import React, { useState } from "react";

function MassConverter({ input, handleResult }) {
  const [unitA, setUnitA] = useState("");
  const [unitB, setUnitB] = useState("");

  const gramsToKilograms = (grams) => grams / 1000;
  const kilogramsToGrams = (kilograms) => kilograms * 1000;
  const gramsToPounds = (grams) => grams * 0.00220462;
  const poundsToGrams = (pounds) => pounds / 0.00220462;
  const gramsToOunces = (grams) => grams * 0.035274;
  const ouncesToGrams = (ounces) => ounces / 0.035274;
  const kilogramsToPounds = (kilograms) => kilograms * 2.20462;
  const poundsToKilograms = (pounds) => pounds / 2.20462;
  const kilogramsToOunces = (kilograms) => kilograms * 35.274;
  const ouncesToKilograms = (ounces) => ounces / 35.274;
  const poundsToOunces = (pounds) => pounds * 16;
  const ouncesToPounds = (ounces) => ounces / 16;

  const handleConversion = () => {
    const value = parseFloat(input);
    if (isNaN(value)) {
      handleResult("Invalid input");
      return;
    }

    let convertedValue;

    switch (unitA) {
      case "g":
        switch (unitB) {
          case "kg":
            convertedValue = gramsToKilograms(value);
            break;
          case "lb":
            convertedValue = gramsToPounds(value);
            break;
          case "oz":
            convertedValue = gramsToOunces(value);
            break;
          default:
            convertedValue = value;
        }
        break;
      case "kg":
        switch (unitB) {
          case "g":
            convertedValue = kilogramsToGrams(value);
            break;
          case "lb":
            convertedValue = kilogramsToPounds(value);
            break;
          case "oz":
            convertedValue = kilogramsToOunces(value);
            break;
          default:
            convertedValue = value;
        }
        break;
      case "lb":
        switch (unitB) {
          case "g":
            convertedValue = poundsToGrams(value);
            break;
          case "kg":
            convertedValue = poundsToKilograms(value);
            break;
          case "oz":
            convertedValue = poundsToOunces(value);
            break;
          default:
            convertedValue = value;
        }
        break;
      case "oz":
        switch (unitB) {
          case "g":
            convertedValue = ouncesToGrams(value);
            break;
          case "kg":
            convertedValue = ouncesToKilograms(value);
            break;
          case "lb":
            convertedValue = ouncesToPounds(value);
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
              <option value="g">Grams (g)</option>
              <option value="kg">Kilograms (kg)</option>
              <option value="lb">Pounds (lb)</option>
              <option value="oz">Ounces (oz)</option>
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
              <option value="g">Grams (g)</option>
              <option value="kg">Kilograms (kg)</option>
              <option value="lb">Pounds (lb)</option>
              <option value="oz">Ounces (oz)</option>
            </select>
          </label>
        </div>
      </section>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default MassConverter;
