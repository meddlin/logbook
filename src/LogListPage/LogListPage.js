import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logActions } from '../_actions';
import { store } from '../_helpers';

import FuelLog from '../_components/FuelLog/FuelLog';

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
    const { classes, logs } = this.props;

  	return(
  		<div>

        <ul className="list-nostyle">
          {logs ? (logs.map(l => 
            <li key={l.id}>
              <FuelLog 
                date={new Date(l.logDate).toLocaleDateString("en-US")} 
                odometer={l.odometer} 
                tripometer={l.tripometer} 
                fuelVolume={l.fuelVolume} 
                price={l.price} 
              />
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