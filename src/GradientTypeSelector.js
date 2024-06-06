import React from "react";

const GradientTypeSelector = ({ gradientType, setGradientType }) => {
  return (
    <div>
      <label>Gradient Type</label>
      <select
        value={gradientType}
        onChange={(e) => setGradientType(e.target.value)}>
        <option value="linear">Linear</option>
        <option value="radial">Radial</option>
      </select>
    </div>
  );
};

export default GradientTypeSelector;
