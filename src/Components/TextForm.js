import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase!", "success");
    // setText(text.toUpperCase()); alternative without storring the value
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed!", "success");
  };

  const handleCopy = () => {
    let cText = document.getElementById("my box");
    cText.select();
    navigator.clipboard.writeText(cText.value);
    props.showAlert("Text copied to clipboard!", "success");
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    // console.log("onchange");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // setText('new text');
  return (
    <>
        <h1>{props.heading}</h1>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
          backgroundColor: props.mode === "dark" ? "grey" : "white"
        }}
      >
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="my box"
            rows="8"
            style={{
              color: props.mode === "light" ? "black" : "white",
              backgroundColor: props.mode === "dark" ? "grey" : "white"
            }}
          ></textarea>
        </div>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert to uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLowerClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>
        Clear the text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>
        Copy to clipboard
      </button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
        Remove extra spaces
      </button>

      <h2>Your Text summary </h2>
      <p>
        {text.split(" ").length - 1} and {text.length} characters
      </p>
      <p>{0.008 * text.split(" ").length} Minutes To Read</p>
      <h2>Preview</h2>
      <pre>{text}</pre>
    </>
  );
}
