import React, { Component } from 'react'

export default class State extends Component { 
    state={
        name:"Imran",
        age:19,
        Prof:'web developer'
    } 
changevalue(){
    this.setState({
        Prof:'teaching'
    })
}
changemind = this.changevalue.bind(this , this.prof)
  render() {
    return (
        <div>
        <h2> my name is {this.state.name} and my profession is {this.state.Prof}</h2>
        <button onClick={this.changemind}>change value</button>
       </div>
    )
  }
}
