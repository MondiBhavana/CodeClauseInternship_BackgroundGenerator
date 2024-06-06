import React from "react";

const ColorPicker = ({ color, setColor, label }) => {
  const handleColorChange = (e) => {
    const { name, value } = e.target;
    setColor({ ...color, [name]: value });
  };

  return (
    <div className="color-picker">
      <label>{label}</label>
      <input
        type="number"
        name="r"
        value={color.r}
        onChange={handleColorChange}
        min="0"
        max="255"
      />
      <input
        type="number"
        name="g"
        value={color.g}
        onChange={handleColorChange}
        min="0"
        max="255"
      />
      <input
        type="number"
        name="b"
        value={color.b}
        onChange={handleColorChange}
        min="0"
        max="255"
      />
    </div>
  );
};

export default ColorPicker;
