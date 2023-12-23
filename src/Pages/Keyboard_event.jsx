import React from 'react'

function Keyboard_event() {

    const onKeyDownText = (e)=> {
        console.log(e.target.value)
    }
  return (
    <>
        <h1>Keyboard event </h1>
        <input type="text" onKeyDown={onKeyDownText}/>
    </>
  )
}
export default Keyboard_event
// onKeyUp
// onKeyPress
// onKeyDown