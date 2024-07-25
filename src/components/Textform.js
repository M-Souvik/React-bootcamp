import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function Textform(Text1) {
    const handleClick = ()=>{
        console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        Text1.showAlert("Converted to Uppercase","success") 
       }
    
    const handleClick2 = ()=>{
        console.log("Lowercase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        Text1.showAlert("Converted to Lowercase","success")
    }
    const handleClick3 = ()=>{
        console.log("Copying text");
       var text=document.getElementById('TextBox')
       text.select();
       navigator.clipboard.writeText(text.value);
       Text1.showAlert("Text Copied","success")
    }
    const FontChange = ()=>{
        console.log("Font Changed to Arial Balck");
       var text=document.getElementById('TextBox')
       text.style.fontFamily='Arial Black'
    }
    const FontChange2 = ()=>{
        console.log("Font Changed to Arial Balck");
       var text=document.getElementById('TextBox')
       text.style.fontFamily='Gill Sans'
    }
    const FontChange3 = ()=>{
        console.log("Font Changed to Arial Balck");
       var text=document.getElementById('TextBox')
       text.style.fontFamily='Times New Roman'
    }
    
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);//enables user to enter text
    }
    const [text, setText] = useState('');
    // setText("Handle on change is clicked");
  return (
      <>
    <div className="container">
     <div className="mb-3">
       <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{color: Text1.mode==='dark'?'white':'#2a2a2dde'}}><h1>{Text1.formtitle}</h1></label>
       <textarea className="form-control" id="TextBox" value={text} onChange={handleOnChange} rows="8" style={{backgroundColor: Text1.mode==='dark'?'#2a2a2dde':'white',color: Text1.mode==='dark'?'white':'#2a2a2dde'}}></textarea>
     </div>
     <button className="btn btn-primary" onClick={handleClick}>
         Convert to Uppercase
     </button>
     <button className="btn btn-dark mx-3" onClick={handleClick2}>
         Convert to Lowercase
     </button>
     <button className="btn btn-info mx-2" onClick={handleClick3}>
        Copy text
     </button>
     <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle mx-9 my-8" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Change Font
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#" onClick={FontChange}>Arial Black</a></li>
    <li><a class="dropdown-item" href="#" onClick={FontChange2}>Gill Sans</a></li>
    <li><a class="dropdown-item" href="#" onClick={FontChange3}>Something else here</a></li>
  </ul>
</div>
     
    </div>
    <div className="container my-3">
        <h4 style={{color: Text1.mode==='dark'?'white':'#2a2a2dde'}}><p>{text.split(" ").length} words and {text.length} characters</p></h4>
        <p style={{color: Text1.mode==='dark'?'white':'#2a2a2dde'}}>You can write {text.split(" ").length/60} words per seconds</p>
        <h2 style={{color: Text1.mode==='dark'?'white':'#2a2a2dde'}}>Preview</h2>
        <p style={{color: Text1.mode==='dark'?'white':'#2a2a2dde'}}>{text.length>0?text:"Please write something in textarea to preview"}</p>
    </div>
    </>
  )
}
Textform.propTypes = {
    formtitle: PropTypes.string

}
