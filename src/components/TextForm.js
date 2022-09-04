import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  //   bascially humei array destructuring syntax use kiya hia yahan pei
  // remeber hook give us a way to use class ki skuch props in funcs
  // text is our var and setText will be the method we use to change it and " kei andar jo hai "
  // i.e its default val
  // cant do text = " something";
  // instead do setText("essei");
  const handleUpClick = () => {
    setText(text.toUpperCase());
    // console.log("uppercase");
  };
  const handleLowClick = () => {
    setText(text.toLowerCase());
  };
  const handleClearClick = () => {
    setText("");
  };
  const handleTitleClick = () => {
    let sentence = text.toLowerCase().split(" ");
    for (let i = 0; i < sentence.length; i++) {
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    setText(sentence.join(" "));
  };
  const handleInvClick = () => {
    let str = text;
    let inv = "";
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (char < 64 || char > 123) {
        inv += char;
        continue;
      }
      char === char.toUpperCase()
        ? (char = char.toLowerCase())
        : (char = char.toUpperCase());
      inv += char;
    }
    setText(inv);
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    alert("Text Copied to Clipboard ");
  };
  const handleOnChange = (event) => {
    //  dekho jab  click wala bhi chal rha tha
    // changes toh ho hi rahe thei but to type something
    // we use this
    // this event var gives us jo text type hua
    // basically listen for change in state variable
    // console.log("On change");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myTextBox"
            rows="8"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#130823" : "white",
              color: props.mode === "dark" ? "white" : "black", 
            }}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2 " onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary mx-2 my-2 " onClick={handleLowClick}>
          Convert to Lower Case
        </button>
        <button
          className="btn btn-primary mx-2 my-2 "
          onClick={handleTitleClick}
        >
          Convert to Title Case
        </button>
        <button className="btn btn-primary mx-2 my-2 " onClick={handleInvClick}>
          Convert to Inverse Case
        </button>
        <button
          className="btn btn-primary mx-2 my-2 "
          onClick={handleCopyClick}
        >
          Copy to Clipboard
        </button>
        <button
          className="btn btn-primary mx-2 my-2 "
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <div className="container my-2">
          <h1>Your Text Summary</h1>
          <p>
            Words:{text.split(" ").length} and Characters:{text.length}{" "}
          </p>
          <p>{0.008 * text.split(" ").length} Min read </p>
          <h2>Preview</h2>
          <p>{text.length >0 ? text:"Enter text to see the preview"}</p>
        </div>
      </div>
    </>
  );
}
