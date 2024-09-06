import React, {useState} from 'react'

export default function TextForm(props) {
    const handleupClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleloClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
    }
    const handleonChange = (event) =>{
        setText(event.target.value);
    }
    
    const [text, setText] = useState('');
    
    return (
      <>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea 
              className="form-control" 
              value={text} 
              onChange={handleonChange} 
              style={{
                backgroundColor: props.mode === 'dark' ? 'grey' : 'white', 
                color: props.mode === 'dark' ? 'white' : 'black'
              }} 
              id="mybox" 
              rows="8"
            />
          </div>
          <button className="btn btn-primary" onClick={handleupClick}>Convert to UpperCase</button>  
          <button className="btn btn-primary mx-3" onClick={handleloClick}>Convert to LowerCase</button>  
          <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear All</button>  
        </div>
        
        <div className="container my-4" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
          <h2>Your Text Summary</h2>
          <p>{text.split(" ").filter((word) => word !== "").length} Words and {text.length} Characters</p>
          <p>{0.008 * text.split(" ").filter((word) => word !== "").length} Minutes Read</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Enter some text above to preview here"}</p>
        </div>
      </>
    );
}
