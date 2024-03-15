import React from "react";
import colorNames from "colornames";

const Output = ({
  colorValue,
  setColorValue,
  isdarkText,
  setIsDarkText,
  setHexaValue,
}) => {
  return (
    <form className="input" onSubmit={(e) => e.preventDefault()}>
      <input
        autoFocus
        type="text"
        placeholder="Type the color"
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexaValue(colorNames(e.target.value));
        }}
        required
      />
      <button type="button" onClick={() => setIsDarkText(!isdarkText)}>
        Toggle Text Color
      </button>
    </form>
  );
};

export default Output;
