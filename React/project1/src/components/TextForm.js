import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUPclick = () =>{
        console.log("Button was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleonChange = (event) =>{
        console.log("On Change");
        setText(event.target.value)

    }
    const[text, setText]=useState('Enter Text Here!');
    
  return (
    <div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange ={handleonChange} id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  <button className="btn btn-primary" onClick={handleUPclick}>Convert to Upper-Case</button>
  </div>
  )
}
