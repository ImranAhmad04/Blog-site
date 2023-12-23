import React from 'react'
import './css/Blog.css'
function Card(props) {
  return (
    <>
      <div className="container">
      <div className="card">
  <img src= {props.img}className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title ">{props.title}</h5>
    <p className="card-text">{props.cardText}</p>
    <a href="#" className="btn btn-primary">{props.cardBtn}</a>
  </div>
</div> 
      </div>
    </ >
  )
}

export default Card