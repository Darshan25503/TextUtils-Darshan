import React,{useState} from 'react'

export default function Form(props) {
  
  
  const [text, setText] = useState('');

  //state

  const [Copy, setCopy] = useState("Copy")

  //upper case function
  
  const handleUpClick=()=>{

    let newText = text.toUpperCase();
    setText(newText);
    let newTextt = "Copy";
    setCopy(newTextt);
    props.showAlert(" Changed to UpperCase","success");
  }

  //lower case function

  const handleLowClick=()=>{
    
    let newText = text.toLowerCase();
    setText(newText);
    let newTextt = "Copy";
    setCopy(newTextt);
    props.showAlert(" Changed to LowerCase","success");
  }

  //Clear Text function

  const handleClearClick=()=>{
    let newText='';
    setText(newText);
    props.showAlert(" Text cleared Successfully","success");
  }  

  //Copy button function

  const handleCopy=()=>{
    navigator.clipboard.writeText(text);
    
    props.showAlert(" Copied","success");
  }

  //On Change Function

  const handleOnChange=(event)=>{
    
    setText(event.target.value);
    let newText = "Copy";
    setCopy(newText);
  }
  // remove space

  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/)
    setText(newText.join(""))
    props.showAlert(" White spaces Removed","success")
  }

  // space word count bug fix
  return (
<>
  <div className='container'>
    <h5>{props.heading}</h5>
    <div className="mb-3">
     <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
     <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter your text here'></textarea>
    </div>
     <button className="btn btn-primary mx-1 my-1" disabled={text.length===0}  onClick={handleUpClick}>Convert to Uppercase</button>
     <button className="btn btn-primary mx-1 my-1" disabled={text.length===0}  onClick={handleLowClick}>Convert to Lowercase</button>
     <button className="btn btn-primary mx-1 my-1" disabled={text.length===0}  onClick={handleExtraSpaces}>Remove White Spaces</button>
     <button className="btn btn-primary mx-1 my-1" disabled={text.length===0}  onClick={handleCopy}>{Copy}</button>
     <button className="btn btn-primary mx-1 my-1" disabled={text.length===0}  onClick={handleClearClick}>Clear Text</button>
     
  </div>

  <div className="container my-3">
    <h5>Your text summary</h5>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
    {/* <p>{0.008*text.split(" ").length} Minutes to read</p> */}
    <h6>Preview</h6>
    <p>{text.length>0 ?  text : "Nothing to preview"}</p>
  </div>
  <div></div>
</>
  )
}
