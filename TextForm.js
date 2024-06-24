import React, { useState } from "react";

function TextForm(props) {
  const handleUpClick = () => {
    let up = text.toUpperCase();
    setText(up);
    props.showAlert("Converted to uppercase","success");
  };

  const clearClick = () => {
    let clr = "";
    setText(clr);
    props.showAlert("Cleared the text","success");
  };

  const handleLoClick = () => {
    let lo = text.toLowerCase();
    setText(lo);
    props.showAlert("Converted to lowercase","success");
  };
  const handleONChange = (event) => {
    setText(event.target.value);
  };


  const no_words = ()=>{
    if(text===""){
          return 0;

  }
  else{

   return text[text.length-1] === " " ? text.split(" ").length-1 : text.split(" ").length;
  }
  }

  const total_time=()=>{
    if(text===""){
      return 0;

}
else{

return text[text.length-1] === " " ? (text.split(" ").length-1)*0.008 : text.split(" ").length*0.008;
}

  }
  //usestate:hook,
  //text ,state variable
  const [text, setText] = useState(""); //array destructuring syntax
  return (
    <div className="container">
      <h1
        style={{
          
          color: props.mode === "dark" ? "white" : "#042743"
        }}
      >
        {props.heading}
      </h1>
      <div
        className="my-3"
        
      >
        <textarea
          style={{
            backgroundColor: props.mode === "dark" ? "gray" : "white",
            color : props.mode === "dark" ? "white" : "#042743"
          }}
          className="form-control"
          id="mybox"
          value={text}
          onChange={handleONChange}
          rows="6"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        convert to upper case
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>
        convert to lower case
      </button>
      <button className="btn btn-primary mx-1" onClick={clearClick}>
        Click to clear
      </button>
      <div
        className="container my-3"
        style={{
          
          color: props.mode === "dark" ? "white" : "#042743"
        }}
      >
        <p>
          number of characters are <b>{text.length}</b>
        </p>
        <p>
          number of words are <b>{no_words()}</b>
        </p>
        <p>
           
          <b>{total_time()}</b> minutes to read
        </p>
        <h2>Prewiew :</h2>
        <p>{text.length > 0? text : "Enter something to preview"}</p>
      </div>
    </div>
  );
}

export default TextForm;
