import React,{useState} from 'react'
export default function About(Text) {
  const [myStyle,setMyStyle] = useState('light')
  
  const darkMode = ()=>{
    if (Text.mode=== 'black'){
    setMyStyle('dark');
    document.body.style.backgroundColor='#2a2a2dde';
    
    console.log('dark mode activated');
  }
    else{
      setMyStyle('light');
      document.body.style.backgroundColor='white';
      console.log('light mode activated');
    }
  }
    return (
    <div className="About" style={{darkMode}}>
                    <h1 className="my-3" style={{color: Text.mode==='dark'?'white':'#2a2a2dde'}}>About Us</h1>
                        <div className="accordion" id="accordionExample" style={{darkMode}}>
                <div className="accordion-item" style={{darkMode}}>
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" style={{ color : Text.mode === 'dark' ? 'white':'#2a2a2dde',backgroundColor: Text.mode === 'dark' ? '#2a2a2dde' : 'white' }} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Accordion Item #1
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" style ={{ color : Text.mode === 'dark' ? '#2a2a2dde' : 'white',backgroundColor: Text.mode === 'dark' ? '#2a2a2dde' : 'white' }} data-bs-parent="#accordionExample">
                    <div className="accordion-body" style ={{ color : Text.mode === 'dark' ? '#2a2a2dde' : 'white' }}>
                      <p  style={{color: Text.mode==='dark'?'white':'#2a2a2dde'}}><strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={{myStyle}} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Accordion Item #2
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{darkMode}}>
                      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={{darkMode}} data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Accordion Item #3
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{myStyle}}>
                      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}
