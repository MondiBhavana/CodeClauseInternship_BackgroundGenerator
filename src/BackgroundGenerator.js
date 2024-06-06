import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
import GradientTypeSelector from "./GradientTypeSelector";
import TextGenerator from "./TextGenerator";
import Preview from "./Preview";

const BackgroundGenerator = () => {
  const [color1, setColor1] = useState({ r: 255, g: 0, b: 0 });
  const [color2, setColor2] = useState({ r: 0, g: 0, b: 255 });
  const [gradientType, setGradientType] = useState("linear");
  const [text, setText] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [displayColor1, setDisplayColor1] = useState({ r: 255, g: 0, b: 0 });
  const [displayColor2, setDisplayColor2] = useState({ r: 0, g: 0, b: 255 });
  const [displayGradientType, setDisplayGradientType] = useState("linear");

  const handleAdd = () => {
    setDisplayText(text);
    setDisplayColor1(color1);
    setDisplayColor2(color2);
    setDisplayGradientType(gradientType);
  };

  const handleRefresh = () => {
    setText("");
    setColor1({ r: 255, g: 0, b: 0 });
    setColor2({ r: 0, g: 0, b: 255 });
    setGradientType("linear");
    setDisplayText("");
    setDisplayColor1({ r: 255, g: 0, b: 0 });
    setDisplayColor2({ r: 0, g: 0, b: 255 });
    setDisplayGradientType("linear");
  };

  return (
    <div className="background-generator">
      <div className="controls">
        <ColorPicker color={color1} setColor={setColor1} label="Color 1" />
        <ColorPicker color={color2} setColor={setColor2} label="Color 2" />
        <GradientTypeSelector
          gradientType={gradientType}
          setGradientType={setGradientType}
        />
        <TextGenerator text={text} setText={setText} />
        <div className="buttons">
          <button onClick={handleAdd}>Add</button>
          <button onClick={handleRefresh}>Refresh</button>
        </div>
      </div>
      <Preview
        color1={displayColor1}
        color2={displayColor2}
        gradientType={displayGradientType}
        text={displayText}
      />
    </div>
  );
};

export default BackgroundGenerator;
