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

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },

  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },

});

class HomePage extends React.Component {
	componentDidMount() {
		/*this.props.dispatch(userActions.getAll());*/
	}

	render() {
		const { classes, user, users } = this.props;
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
                            <Link to="/list">Logs</Link>
                        </Button>
                        <Button size="medium" color="default">
                            <Link to="/login">Logout</Link>
                        </Button>
                    </Toolbar>
                </AppBar>

                <div className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Hi {user.firstName}!
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" component="p">
                        You're logged in with React & JWT!!
                    </Typography>

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

const connectedHomePage = connect(mapStateToProps)(withStyles(styles)(HomePage));
export { connectedHomePage as HomePage };