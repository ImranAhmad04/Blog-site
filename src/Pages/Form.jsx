// control form and uncontrol form
// control form use controlled by react-dom and uncontrol form controlled by react
// control form 
import React from 'react'

function Form() {
     function submit(){
        
    }
  return (
    <div className="container">
        
    <input type="text" placeholder='uncontrolles form ' value="" onChange={submit}/>
    </div>
     
  )
}

export default Form



 