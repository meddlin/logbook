import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logActions } from '../_actions';

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


  async getLogs() {
    const { dispatch } = this.props;
    let beginDate = new Date('2019-03-01');
    beginDate = beginDate.toLocaleDateString("en-US");
    let endDate = new Date();
    endDate = endDate.toLocaleDateString("en-US");

    let result = await dispatch(logActions.getLogListInDateRange( beginDate, endDate ));
    this.setState({ logs: result });
    console.log(result);
  }

  render() {

    const data = [{
      name: 'Tanner Linsley',
      age: 26
    }];
 
    const columns = [{
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
      }, {
        Header: 'Age',
        accessor: 'age',
        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
      }];

  	return(
  		<div>
  			<Typography variant="h4" gutterBottom>Logs</Typography>

        <div onClick={this.getLogs}>GetLogs</div>

        <ul>
          {data.map(d => <li>Name: {d.name} | Age: {d.age}</li>)}
        </ul>
  		</div>
  	);
  }
}

/*function mapStateToProps(state) {
    
    return { };
}*/

const connectedLogListPage = connect()(LogList);
export { connectedLogListPage as LogList };