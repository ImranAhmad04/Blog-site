import React from 'react'

function Clipboard() {
  const copytext = ()=>{
    alert(" text copied")
  }
  const cuttext = (e)=>{
    console.log("Text cut: " , e.target.value)
  }
  return (
    <div>
      <p onCopy={copytext}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, sequi!</p>
      <textarea onCut={cuttext} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, sequi!</textarea>
      <p onCopy={copytext} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, sequi!</p>
    </div>
  )
}

export default Clipboard