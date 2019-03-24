import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class HomePage extends React.Component {
	componentDidMount() {
		/*this.props.dispatch(userActions.getAll());*/
	}

	render() {
		const { user, users } = this.props;
		return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>

                        <Button size="medium" color="default">
                            <Link to="/fuel-log">Add Log</Link>
                        </Button>
                        <Button size="medium" color="default">
                            <Link to="/login">Logout</Link>
                        </Button>
                    </Toolbar>
                </AppBar>
    			<div className="col-md-6 col-md-offset-3">

                    <h1>Hi {user.firstName}!</h1>
                    <p>You're logged in with React & JWT!!</p>
                    <h3>Users from secure api end point:</h3>

                    { users.loading && <em>Loading users...</em> }
                    { users.error && <span className="text-danger">ERROR: {users.error}</span> }
                    { users.items &&
                    	<ul>
                    		{users.items.map( (user, index) => 
                    			<li key={user.id}>
                    				{user.firstName + ' ' + user.lastName}
                    			</li>
                    		)}
                    	</ul>
                    }
                    <p>
                    	<Link to="/login">Logout</Link>
                    </p>
                </div>
            </div>
		);
	}
}

function mapStateToProps(state) {
	const { users, authentication } = state;
	const { user } = authentication;
	return { user, users };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };