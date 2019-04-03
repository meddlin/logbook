import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logActions } from '../_actions';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ReactTable from 'react-table';

class LogList extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

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