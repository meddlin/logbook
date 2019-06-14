import React, { Component } from 'react';
import { Redirect } from 'react-router'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { authenticationActions } from '../_actions';
import { store } from '../_helpers';

class LogoutPage extends Component {
    
    render() {
        store.dispatch(authenticationActions.logout());
        return ( <Redirect to="/login" /> );
    }
}

function mapStateToProps(state) {
    return { };
}

const connectedLogoutPage = withRouter(connect(mapStateToProps)(LogoutPage));
export { connectedLogoutPage as LogoutPage };