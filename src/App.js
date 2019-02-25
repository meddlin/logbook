import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  /**
  * Submits form data (via state) to the API
  */
  submitForm() {
    console.log('clicked submitForm() ');
  }

  /**
  * Removes all values from the input elements on the form
  */
  clearForm() {
    console.log('clicked clearForm() ');
  }

  render() {
    return (
      <div className="App">
        
        <div>
          <label className="label">Date</label>
          <input type="text" /> 
        </div>
        <div>
          <label className="label">ODO</label>
          <input type="text" />
        </div>
        <div>
          <label className="label">Trip</label>
          <input type="text" />
        </div>
        <div>
          <label className="label">Fuel Vol.</label>
          <input type="text" />
        </div>
        <div>
          <label className="label">Price</label>
          <input type="text" />
        </div>

        <div id="controls">
          <div id="btn-submit" onClick={this.submitForm}>Add</div>
          <div id="btn-clear" onClick={this.clearForm}>Clear</div>
        </div>

      </div>
    );
  }
}

export default App;
