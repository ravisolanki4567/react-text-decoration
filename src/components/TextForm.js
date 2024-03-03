import { useState } from "react";


const TextForm =(props) => {
    const [text, setText] = useState("Enter Text")


    const handleUpClick =()=>{
        // console.log("upperCase was clicked" + text)
        let newNext = text.toUpperCase();
        setText(newNext)

    }
    
    const handleLowClick =()=>{
        // console.log("upperCase was clicked" + text)
        let newNext = text.toLowerCase();
        setText(newNext)
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

      const handleClearClick = ()=>{
          let newNext = ""
          setText(newNext)
        }

        const onchangeHandler =(e) =>{
            // console.log("on change")
            setText(e.target.value)
        }
        
        return(
        <div>

    <div>
    <h1>{props.heading}</h1>
    <div className="mb-3" >
    <textarea className="form-control" value={text} onChange={onchangeHandler}  id="my-box" rows={8}>
     </textarea>
    </div>
    <button  className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase
    </button>
    <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase
    </button>
    <button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Speak
    </button>
    <button type="button" className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text
    </button>
    </div>

    
    <div className="container my-3">
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} Words And {text.length} Characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>preview</h2>
    <p>{text.length>0?text:"Enter Something in the Text box"}</p>

    </div>
    </div>
    
);
}
 export default TextForm;


 
  
  