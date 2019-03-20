import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logActions } from '../_actions';

class Log extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logDate: '',
      odometer: '',
      tripometer: '',
      fuelVolume: '',
      price: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  /*
  * Handles moving DOM values into state values.
  */
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  /**
  * Submits form data (via state) to the API
  */
  async submitForm() {
    console.log('in submit form...');
    const { logDate, odometer, tripometer, fuelVolume, price } = this.state;
    const { dispatch } = this.props;

    dispatch(logActions.createLog(
      {
        logDate: logDate, odometer: odometer, tripometer: tripometer, fuelVolume: fuelVolume, price: price 
      }
    ));
  }

  /**
  * Removes all values from the input elements on the form
  */
  clearForm() {
    this.setState({ logDate: '', odometer: '', tripometer: '', fuelVolume: '', price: '' });
  }

  render() {
    const { logDate, odometer, tripometer, fuelVolume, price } = this.state;

  	return(
  		<div className="Log">
  			<div>
          <label className="label">Date</label>
          <input type="text" name="logDate" value={logDate} onChange={this.handleChange} /> 
        </div>
        <div>
          <label className="label">ODO</label>
          <input type="text" name="odometer" value={odometer} onChange={this.handleChange} />
        </div>
        <div>
          <label className="label">Trip</label>
          <input type="text" name="tripometer" value={tripometer} onChange={this.handleChange} />
        </div>
        <div>
          <label className="label">Fuel Vol.</label>
          <input type="text" name="fuelVolume" value={fuelVolume} onChange={this.handleChange} />
        </div>
        <div>
          <label className="label">Price</label>
          <input type="text" name="price" value={price} onChange={this.handleChange} />
        </div>

        <div id="controls">
          <div id="btn-submit" onClick={this.submitForm}>Add</div>
          <div id="btn-clear" onClick={this.clearForm}>Clear</div>
        </div>
  		</div>
  	);
  }
}

/*function mapStateToProps(state) {
    
    return { };
}*/

const connectedLogPage = connect()(Log);
export { connectedLogPage as Log };