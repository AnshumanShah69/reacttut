import React,{useState} from 'react'

export default function TextForm(props) {
const handleUpClick=()=>{
    let newText=text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
}
const handleOnChange=(event)=>{///we need this to see changes that we make when entering the text inside  the text area
    console.log("Onchange");///just for conole purpose
    setText(event.target.value);
}
const handleLoClick=()=>{
    let newText=text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
}
const clearText =()=>{
    let newText="";
    setText(newText);
    props.showAlert("Text cleared","success");
}
const handleCopy=()=>{
    console.log("i am copying this text");
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to CLipboard","success");
}
const handleExtraSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("extra spaces removed","success");
}

    const [text,setText]=useState("");
    ///hooks syntax and are given inside functional component
    ///here text is the default value wwe give through the useState() and when we want to change we use setText
    ///to change a state we have to use the function setText() cant do using assignment operator
    return (
        <>
        <div className='container' style={{color:props.mode==="dark"?"white":"black"}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode==="dark"?"#13466e":"white",color :props.mode==="dark"?"white":"black"}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearText}>clear</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        </div>

        <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
            <h1>Your text Summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>

            <h2>Previews</h2>
            <p>{text.length<0?text: "Enter something in the textbox to preview it here"}</p>
        </div>
        </>
    )
}
