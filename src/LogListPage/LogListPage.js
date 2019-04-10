import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logActions } from '../_actions';
import { store } from '../_helpers';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class LogList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logs: {}
    };

    this.getLogs = this.getLogs.bind(this);
  }

  componentDidMount() {
    this.getLogs();
  }

  async getLogs() {
    const { dispatch } = this.props;
    let beginDate = new Date('2019-03-01');
    beginDate = beginDate.toLocaleDateString("en-US");
    let endDate = new Date();
    endDate = endDate.toLocaleDateString("en-US");

    store.dispatch(logActions.getLogListInDateRange( beginDate, endDate ));
  }

  render() {
    const { logs } = this.props;

  	return(
  		<div>
  			<Typography variant="h4" gutterBottom>Logs</Typography>

        <ul>
          {logs ? (logs.map(l => 
            <li key={l.id}>
              Date: {new Date(l.logDate).toLocaleDateString("en-US")}, 
              Odometer: {l.odometer}, 
              Tripometer: {l.tripometer}, 
              Fuel: {l.fuelVolume}, 
              Price: {l.price} 
            </li>)) 
          : ''}
        </ul>

  		</div>
  	);
  }
}

function mapStateToProps(state) {
    return {
      logs: state.log.fuelLogs
    };
}

const connectedLogListPage = connect(mapStateToProps)(LogList);
export { connectedLogListPage as LogList };