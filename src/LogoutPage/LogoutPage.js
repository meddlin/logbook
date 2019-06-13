import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { authenticationActions } from '../_actions';

class LogoutPage extends Component {
    componentWillMount() {
        authenticationActions.logout();
    }

    render() {
        return null;
    }
}

function mapStateToProps(state) {
    return { };
}

const connectedLogoutPage = withRouter(connect(mapStateToProps)(LogoutPage));
export { connectedLogoutPage as LogoutPage };