import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logActions } from '../_actions';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    const { logDate, odometer, tripometer, fuelVolume, price } = this.state;
    const { dispatch } = this.props;

    let userId = JSON.parse(localStorage.user).id;
    let fuelLog = { logDate: logDate, odometer: odometer, tripometer: tripometer, fuelVolume: fuelVolume, price: price };

    dispatch(logActions.createLog( userId, fuelLog ));
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
          <TextField id="fuelLog_logDate"
            name="logDate"
            label="logDate" value={logDate} onChange={this.handleChange} margin="normal" />
        </div>

        <div>
          <label className="label">ODO</label>
          <TextField id="fuelLog_odometer"
            name="odometer"
            label="odometer" value={odometer} onChange={this.handleChange} margin="normal" />
        </div>

        <div>
          <label className="label">Trip</label>
          <TextField id="fuelLog_tripometer"
            name="tripometer"
            label="tripometer" value={tripometer} onChange={this.handleChange} margin="normal" />
        </div>

        <div>
          <label className="label">Fuel Vol.</label>
          <TextField id="fuelLog_fuelVolume"
            name="fuelVolume"
            label="fuelVolume" value={fuelVolume} onChange={this.handleChange} margin="normal" />

        </div>
        <div>
          <label className="label">Price</label>
          <TextField id="fuelLog_price"
            name="price"
            label="price" value={price} onChange={this.handleChange} margin="normal" />

        </div>

        <div id="controls">
          <Button variant="contained" color="primary" onClick={this.submitForm}>Add</Button>
          <Button variant="contained" onClick={this.clearForm}>Clear</Button>
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