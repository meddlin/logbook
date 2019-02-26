import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.sayHello = this.sayHello.bind(this);
  }

  async sayHello() {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    alert(body.express);
    return body;
  }

  /**
  * Submits form data (via state) to the API
  */
  async submitForm() {
    console.log('in submit form...');

    const response = await fetch('/api/Log/CreateLog', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ logDate: new Date(), odometer: '99999', tripometer: '555', fuelVolume: '14.3', price: '36.75' })
    });

    const body = await response.text();

    console.log(`clicked submitForm() ${body}`);
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

          <div id="btn-clear" onClick={this.sayHello}>Say Hello</div>
        </div>

      </div>
    );
  }
}

export default App;
