import React from 'react'

function Focus() {
    const focusText = ()=>{
        console.log('you have focus on input text')
    }
  return (
    <> 
    {/* focus event  */}
    <input type="text" onFocus={focusText}/>
    </>
  )
}

export default Focus