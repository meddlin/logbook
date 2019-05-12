import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { logActions } from '../_actions';
import * as Yup from 'yup';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { CustomLogForm } from './form';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class LogForm extends Component {
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
    const { classes } = this.props;
    const { logDate, odometer, tripometer, fuelVolume, price } = this.state;

    const values = { logDate: "", odometer: "", tripometer: "", fuelVolume: "", price: "" };
    const validationSchema = Yup.object(
    {
      logDate: Yup.string("Enter a log date")
                  .required("Log date is required"),
      odometer: Yup.string("Enter your odometer reading")
                  .required("Odometer is required"),
      tripometer: Yup.string("")
                  .required("Enter your password"),
      fuelVolume: 
        Yup.string("Enter your password")
          .required("Confirm your password")
          .oneOf([Yup.ref("password")], "Password does not match"),
      price: Yup.string("Price is needed.")
                .required("Please enter the price.")
    });


  	return(
      
  		<div className="Log">
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <div id="log-form-list">
              <Formik 
                render={props => <CustomLogForm {...props} /> }
                intialValues={values}
                validationSchema={validationSchema}
              />

              {/*<TextField 
                id="fuelLog_logDate"
                name="logDate"
                label="Log Date" value={logDate} onChange={this.handleChange} margin="normal" />

              <TextField 
                id="fuelLog_odometer"
                name="odometer"
                label="Odometer" value={odometer} onChange={this.handleChange} margin="normal" />

              <TextField id="fuelLog_tripometer"
                name="tripometer"
                label="Tripometer" value={tripometer} onChange={this.handleChange} margin="normal" />

              <TextField id="fuelLog_fuelVolume"
                name="fuelVolume"
                label="Fuel Volume" value={fuelVolume} onChange={this.handleChange} margin="normal" />

              <TextField id="fuelLog_price"
                name="price"
                label="Price" value={price} onChange={this.handleChange} margin="normal" />*/}

            </div>
          </Paper>
        </main>

        <div id="controls">
          <Button className={classes.button} variant="contained" color="primary" onClick={this.submitForm}>Add</Button>
          <Button className={classes.button} variant="contained" onClick={this.clearForm}>Clear</Button>
        </div>
  		</div>
  	);
  }
}

/*function mapStateToProps(state) {
    
    return { };
}*/

const connectedLogPage = connect()(withStyles(styles)(LogForm));
export { connectedLogPage as LogForm };