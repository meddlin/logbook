import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './_helpers';
import { alertActions } from './_actions';
import { PrivateRoute } from './_components';
import { NavigationBar } from './NavigationBar';
import { HomePage } from './HomePage/HomePage';
import { LoginPage } from './LoginPage/LoginPage';
import { LogoutPage } from './LogoutPage/LogoutPage';
import { RegisterPage } from './RegisterPage/RegisterPage';
import Pricing from './PricingPage/Pricing';
import { LogFormLayout } from './LogPage/LogFormLayout';
import { LogList } from './LogListPage/LogListPage';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { alert, users } = this.props;

    return (
      <div className="App">
        {
          alert.message && <div className={`alert ${alert.type}`}>{alert.message.message}</div>
        }
        <Router history={history}>
            <NavigationBar />

            <div>
                <PrivateRoute exact path="/" component={HomePage} />
                <PrivateRoute exact path="/list" component={LogList} />
                <PrivateRoute exact path="/fuel-log" component={LogFormLayout} />
                <Route path="/login" component={LoginPage} />
                <Route path="/logout" component={LogoutPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/pricing" component={Pricing} />
            </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert, users } = state;
  return {
    alert,
    users
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };