import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { history } from './_helpers';
import { alertActions } from './_actions';
import { PrivateRoute } from './_components';
import { HomePage } from './HomePage/HomePage';
import { LoginPage } from './LoginPage/LoginPage';
import { RegisterPage } from './RegisterPage/RegisterPage';
import Pricing from './PricingPage/Pricing';
import { FormikForm } from './LogPage/LogFormik';
import { LogForm } from './LogPage/LogForm';
import { LogFormikRedux } from './LogPage/LogFormikRedux';
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
    const { alert } = this.props;

    const linkStyle = {
      color: 'white',
      textDecoration: 'none'
    };

    return (
      <div className="App">
        {
          alert.message && <div className={`alert ${alert.type}`}>{alert.message.message}</div>
        }
        <Router history={history}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>

                    <Button size="medium" color="default">
                        <Link to="/fuel-log" style={linkStyle}>Add Log</Link>
                    </Button>
                    <Button size="medium" color="default">
                        <Link to="/list" style={linkStyle}>Logs</Link>
                    </Button>
                    <Button size="medium" color="default">
                        <Link to="/login" style={linkStyle}>Logout</Link>
                    </Button>
                </Toolbar>
            </AppBar>
            <div>
                <PrivateRoute exact path="/" component={HomePage} />
                <PrivateRoute exact path="/list" component={LogList} />
                <PrivateRoute exact path="/fuel-log" component={LogFormLayout} />
                {/* <PrivateRoute exact path="/fuel-log" component={FormikForm} /> */}
                {/* <PrivateRoute exact path="/fuel-log" component={LogForm} /> */}
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