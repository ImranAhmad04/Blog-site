import React from 'react'
function Home(props) {
  return (
    <div>
      <h1>  my name is {props.name}  . my number is {props.number}</h1>
    </div>
  )
}

export default Home