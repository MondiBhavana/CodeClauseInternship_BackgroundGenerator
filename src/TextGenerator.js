import React from "react";

const TextGenerator = ({ text, setText }) => {
  return (
    <div>
      <label>Text</label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default TextGenerator;
