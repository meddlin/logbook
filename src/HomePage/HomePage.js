import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';

import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

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