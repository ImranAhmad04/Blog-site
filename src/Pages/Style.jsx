import React from 'react' 

import hablu from'./style.module.css';
export default function Style() {
    const h2style = { 
    backgroundColor:"green",
      textAlign:"center",
  }
  return (
    <div>
        <h2 style={h2style}>its not our first style </h2>
        
    <h3 className={hablu.pagla}> imran ahmed </h3>
    </div>
  )
}
