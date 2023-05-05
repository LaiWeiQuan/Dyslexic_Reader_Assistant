import React, { useState } from "react";

function TextBox() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleChange(event) {
    const inputText = event.target.value;
    setText(inputText);
    const outputText = boldify(inputText);
    setOutput(outputText);
  }

  function boldify(inputText) {
    const words = inputText.split(" ");
    const boldedWords = words.map((word) => {
      let endIndex = Math.ceil((word.length * 3) / 8);
      const boldedWord =
        "<strong>" +
        word.slice(0, endIndex) +
        "</strong>" +
        word.slice(endIndex, word.length);
      return boldedWord;
    });
    return boldedWords.join(" ");
  }

  function handleModeChange() {
    setIsDarkMode(!isDarkMode);
  }

  const textStyle = {
    height: "200px",
    width: "50%",
    backgroundColor: isDarkMode ? "black" : "white",
    color: isDarkMode ? "white" : "black",
    border: "1px solid",
    borderColor: isDarkMode ? "white" : "black",
    padding: "10px",
    overflowY: "scroll"
  };

  return (
    <div>
      <h1>Bionic Reading</h1>
      <label htmlFor="text-box">Enter your text:</label>
      <br />
      <textarea
        id="text-box"
        value={text}
        onChange={handleChange}
        style={textStyle}
      />
      <br />
      <label htmlFor="output-box">Output:</label>
      <br />
      <div
        id="output-box"
        dangerouslySetInnerHTML={{ __html: output }}
        style={textStyle}
      />
      <br />
      <button onClick={handleModeChange}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default TextBox;
