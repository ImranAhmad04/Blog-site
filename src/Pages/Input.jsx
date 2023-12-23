// import React from 'react'

// export default function Input() {
// const Fromchange = (event) => {
// document.querySelector('.form-control').innerHTML = 'Date is: ' + event.target.value 
// }

//   return (
//     <div>
//         {/* <input type="text" name='channelName' placeholder='channel Name' 
//         className='form-control'  onChange={Fromchange}/>
//         <input type="text" name='channelName' placeholder='channel Name' 
//         className='form-control'  onChange={Fromchange}/> */}
//         <input className='form-control' type="date" name='creationDate' onChange={Fromchange}/>
//         <input type="checkbox" name="checkbox" id="checkbox"  value={'checkbox'}/>
//         <p id='p'> </p>
//     </div>
//   )
// }




import React, { Component } from 'react'

export default class Input extends Component {
  state = {
    channelName: '',
    subscriber: '',
    category: '',
    about: '',
    gender: '',
    checkbox: true,
  }
  Formchange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { channelName, subscriber, category, creationDate, gender, checkbox, about } = this.state
    return (
      <div>
        <input type="text" name='channelName' placeholder='channelName' className='form-control' onChange={this.Formchange} value={channelName} />
        <input type="text" name='subscriber' placeholder='subscriber' className='form-control' onChange={this.Formchange} value={subscriber} />
        <select name="category" value={category} onChange={this.Formchange} className='Form-control'>
          <option value="select">select</option>
          <option value="programming">programming</option>
          <option value="funnny">funnny</option>
          <option value="islamic">islamic</option>
          <option value="education">education</option>
          <option value="entertrainment">entertrainment</option>
        </select>
        <textarea name="about" id="" value={about} cols="30" rows="10" onChange={this.Formchange}></textarea>
        <input className='form-control' value={creationDate} type="date" name='creationDate' onChange={this.Fromchange} />
        <input onChange={this.Formchange} type="radio" name="gender" value={'male'} /> 
        <label htmlFor="male" > male </label><br />
        <input onChange={this.Formchange} type="radio" name="gender"  value={'female'} />
        <label htmlFor="gender" > female </label> <br /> 
        <input type="checkbox" name="checkbox" checked={checkbox} value={checkbox} />
        <label htmlFor="checkbox">Agree and countinue </label>
        <br />
        <button className='btn btn-primary' onClick={() => console.log(this.state)}> submit </button>
      </div>
    )
  }
}
