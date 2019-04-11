import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logActions } from '../_actions';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  button: {
    marginTop: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit,
  },
});

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
    const { classes } = this.props;
    const { logDate, odometer, tripometer, fuelVolume, price } = this.state;

  	return(
  		<div className="Log">
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <div id="log-form-list">
              <TextField id="fuelLog_logDate"
                name="logDate"
                label="Log Date" value={logDate} onChange={this.handleChange} margin="normal" />

              <TextField id="fuelLog_odometer"
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
                label="Price" value={price} onChange={this.handleChange} margin="normal" />
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

const connectedLogPage = connect()(withStyles(styles)(Log));
export { connectedLogPage as Log };