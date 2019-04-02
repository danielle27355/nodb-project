import React, { Component } from "react";
import axios from "axios";
import Header from './components/Header/Header';
import Display, { DisplayUniverses } from './components/Display/DisplayUniverses';
import Form from './components/Form/Form'
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readUniversesArray: []
    };
  }

  componentDidMount() {
    this.getAllUniverses();
  }

  //This gets the universe list from the backend
  getAllUniverses = () => {
    axios.get("/api/universes").then(response => {
      console.log(response.data);
      this.setState({
        readUniversesArray: response.data
      });
    });
  };

  addName = (id, name) => {
    console.log('hit', id, name)
    axios.put(`/api/universes/${id}/${name}`).then(response => {
      this.setState({
        readUniversesArray: response.data
      })
      this.getAllUniverses()
    })
  }

  addUniverse = (univerName, country, occupation, hobby, personality) => {
    let newUniverse = {
      universe_name: univerName,
      your_country: country,
      your_occupation: occupation,
      your_hobbies: hobby,
      personality_type: personality
    }
    axios.post("/api/universes", newUniverse).then(response => {
      this.setState({
        readUniversesArray: response.data
      })
      this.getAllUniverses()
    })
  }
  destoryUniverse = (id) => {
    axios.delete(`/api/universes/${id}`).then(response => {
      this.setState({
        readUniversesArray: response.data
      })
      this.getAllUniverses()
    })
  }

  render() {
    return <div className="App">
      <Header />
      <Form addUniverse={this.addUniverse}/>
      <DisplayUniverses universe={this.state.readUniversesArray} addName={this.addName} destoryUniverse={this.destoryUniverse}/>
    </div>;
  }
}
export default App;
