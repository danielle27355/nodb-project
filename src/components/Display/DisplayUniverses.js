import React, { Component } from 'react';
import './DisplayUniverse.css'

export class DisplayUniverses extends Component {
  constructor(){
    super();
    this.state = {
      userInput: ''
    }
  }

  updateUserInput = (input) => {
    this.setState({
      userInput: input
    })
  }




  render() {
    console.log(this.props.addName)
    let {universe} = this.props
    let mappedUniverses = universe.map( universe => {
      return (
        <div key={universe.id}>
          <h1> {universe.universe_name}</h1>
          <h2>Country: {universe.your_country}</h2>
          <h2>Hobbies: {universe.your_hobbies}</h2>
          <h2>Name: {universe.your_name}</h2>
          <h2>Occupation: {universe.your_occupation}</h2>
          <label>Enter name: </label>
          <input type='text' onChange={event => this.updateUserInput(event.target.value)} />
          <button onClick={()=> this.props.addName(universe.id, this.state.userInput)}>Add</button>
          <button onClick={() => this.props.destoryUniverse(universe.id)}>Delete</button>
          <hr />
        </div>
      )
    })
    return (
      <div className='mappedUniverses'>
        {mappedUniverses}
      </div>
    )
  }
}

export default DisplayUniverses
