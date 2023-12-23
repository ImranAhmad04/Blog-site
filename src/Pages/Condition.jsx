import React, { Component } from 'react'
import Piaz from './Piaz'
export default class Condition extends Component {
  constructor(props){
    super(props)
    this.state = {
      yourAge:true,
    }
  }
  render() {
    let ami;
    if (this.state.yourAge) {
      ami = 'welcome to Piazer arot'
    }
    else{
      ami =  <Piaz/>
    }
    return (
      <div>{ami}</div>
    )
  }
}
