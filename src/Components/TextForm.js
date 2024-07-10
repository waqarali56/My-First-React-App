import React, { memo,useState } from "react";


export default memo(function TextForm(props) {

  const [text,setText]=useState("Enter text here");

   // wrong way text="entee text here2";

   // correct way    setText("please enter text here "); it is also not working

   // it is working 
   function haddleUppercase()
   {
          
          let newtext= text.toUpperCase();
          setText(newtext);
   }
    function handdleOnChange(e)
    {
     
      setText(e.target.value);
    }

    

    let TextAreaStyle=
    {
      backgroundColor:'transparent',
      color:'#899499'
    }
 
    

    const [myStyle,setstyle]=useState({
      backgroundColor: 'white',
      color:'black'
     })

     function changeMode()
     {
      if(myStyle.backgroundColor==="white")
      {
        setstyle({
          backgroundColor: '#301934',
          color:'white'
         })
      }
      else
      {
        setstyle({
          backgroundColor: 'white',
          color:'black'
         })
      }
     }
       


  return (
    <>
    <div style={myStyle}>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" style={TextAreaStyle} onChange={handdleOnChange} value={text} id="mybox" rows="8"></textarea>
      </div>

      <button type="submit" className="btn btn-primary" onClick={haddleUppercase}>
        Covert to UpperCase
      </button>

    </div>
    <div className='container my-3'>
       <h1>TEXT SUMMARY</h1>
       <div>
        {text.split(" ").length} Words and {text.length};
       </div>
   </div>

   <div className='container my-3'>
   <button type="submit" className="btn btn-primary" onClick={changeMode}>
        Change mode
      </button>
   </div>

    </div>
    
    </>
   
  );
});
