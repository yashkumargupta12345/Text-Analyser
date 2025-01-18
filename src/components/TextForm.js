import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("UpperCase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleLoClick = () => {
    console.log("LowerCase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const toggleCopyText = () => {
    let text = document.getElementById('myBox').value;
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to ClipBoard", "success");
  }

const Color = props.mode === 'dark'? 'light': 'dark';
const [text, setText]= useState("");
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 class="text-center mt-5">{props.heading}</h1>
        <div className="container vh-50 d-flex justify-content-center align-items-center">
          <textarea className="form-control w-40" value={text} onChange={handleOnChange} style={{color: props.mode==='dark'?'white':'black', backgroundColor: props.mode==='dark'?'gray': 'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mt-4 ms-5" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mt-4 mx-5" onClick={handleLoClick}>Convert to Lowercase</button>
        <button type="button" onClick={toggleCopyText} className="btn btn-primary mt-4 mx-2">Copy Text to Clipboard</button>

      </div>
      <div className={`${props.mode==="dark"?'text-light':'text-dark'}`}>
          <h2 className="mx-5 my-3"> Your Text Summary</h2>
          <p className="mx-5 my-3">{text.split(/\s+/).filter(word => word.trim() !== "").length} Words and {text.length} Characters{" "}</p>
          <p className="mx-5 my-3">{0.008 * text.length} read</p>
          <h3 className="mx-5 my-3">Preview</h3>
          <p className="mx-5 my-3">{text.length > 0 ? text:"Nothing to Preview!"}</p>
      </div>

    </>
  );
}
