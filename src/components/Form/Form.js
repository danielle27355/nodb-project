import React, { Component } from "react";
import "./form.css";

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      univerName: "",
      country: "",
      occupation: "",
      hobby: "",
      personality: ""
    };
  }

  render() {
    let { univerName, country, occupation, hobby, personality } = this.state;
    console.log(univerName, country, occupation, hobby, personality);
    return (
      <div className="addUniverse">
        <h1>Add A Universe</h1>
        <div>
          <label>Universe Name</label>
          <input
            type="text"
            onChange={event =>
              this.setState({
                univerName: event.target.value
              })
            }
          />
        </div>
        <div>
          <label>Country</label>
          <input
            type="text"
            onChange={event =>
              this.setState({
                country: event.target.value
              })
            }
          />
        </div>
        <div>
          <label>Occupation</label>
          <input
            type="text"
            onChange={event =>
              this.setState({
                occupation: event.target.value
              })
            }
          />
        </div>
        <div>
          <label>Hobby</label>
          <input
            type="text"
            onChange={event =>
              this.setState({
                hobby: event.target.value
              })
            }
          />
        </div>
        <div>
          <label>Personality</label>
          <input
            type="text"
            onChange={event =>
              this.setState({
                personality: event.target.value
              })
            }
          />
        </div>
        <button onClick={() => this.props.addUniverse(univerName, country, occupation, hobby, personality)} > Add Universe </button>
      </div>
    );
  }
}

export default Form;
