import React from "react";

const Preview = ({ color1, color2, gradientType, text }) => {
  const background = `${gradientType}-gradient(rgb(${color1.r}, ${color1.g}, ${color1.b}), rgb(${color2.r}, ${color2.g}, ${color2.b}))`;

  const previewStyle = {
    background: background,
  };

  return (
    <div className="Preview" style={previewStyle}>
      {text}
    </div>
  );
};

export default Preview;
