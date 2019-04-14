import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './_helpers';
import { alertActions } from './_actions';
import { PrivateRoute } from './_components';
import { HomePage } from './HomePage/HomePage';
import { LoginPage } from './LoginPage/LoginPage';
import { RegisterPage } from './RegisterPage/RegisterPage';
import Pricing from './PricingPage/Pricing';
import { Log } from './LogPage/Log';
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
    const { alert } = this.props;

    return (
      <div className="App">
        {
          alert.message && <div className={`alert ${alert.type}`}>{alert.message.message}</div>
        }
        <Router history={history}>
            <div>
                <PrivateRoute exact path="/" component={HomePage} />
                <PrivateRoute exact path="/list" component={LogList} />
                <PrivateRoute exact path="/fuel-log" component={Log} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/pricing" component={Pricing} />
            </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };