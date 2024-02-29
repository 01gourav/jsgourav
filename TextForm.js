import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("enter text here" + text);
        let newText = text.toUpperCase();
        setText(newText)
        
    }       
    const handleLoClick = () => {
            //console.log("enter text here" + text);
            let newText = text.toLowerCase();
            setText(newText)
    }
    

    const handleOnChange = (event) => {
        //console.log("onChange");
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here2');
    return (
        <>
        <div className="container">
            <h1>{props.headings}</h1>
            <div className="mb-3">

                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to uppercase</button>
            </div>
            <div className="container my-20">
                <h1>your text summary is here</h1>
                <p>{text.split (" ").length} words and {text.length} character</p>
                <p>{0.008 * text.split (" ").length} minutest to read</p>
                <h2>PREVIEW</h2>
                <h4>{text}</h4>
            </div>
            </>
            )
}
