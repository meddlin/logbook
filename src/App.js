import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Label } from 'office-ui-fabric-react';
import { IconButton } from 'office-ui-fabric-react/lib/Button';

import { history } from './_helpers';
import { alertActions } from './_actions';
import { PrivateRoute } from './_components';
import { HomePage } from './HomePage/HomePage';
import { LoginPage } from './LoginPage/LoginPage';
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
    const { alert } = this.props;

    const styles = {
      navBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#484644',

        left: {
          display: 'flex',
          flexDirection: 'row'
        },
        right: {
          display: 'flex',
          flexDirection: 'row'
        }
      },
      linkStyle: {
        textDecoration: 'none',
        margin: '0 0.25em 0 0.25em'
      },
      whiteLabel: {
        color: 'white'
      }
    }

    return (
      <div className="App">
        {
          alert.message && <div className={`alert ${alert.type}`}>{alert.message.message}</div>
        }
        <Router history={history}>
            <div style={styles.navBar}>
                <div style={styles.navBar.left}>
                  <IconButton 
                    style={{color: 'white'}} 
                    iconProps={{ iconName: 'CollapseMenu' }} 
                    title="CollapseMenu" 
                    ariaLabel="CollapseMenu" />
                  <Link to="/fuel-log" style={styles.linkStyle}>
                    <Label style={styles.whiteLabel}>Add Log</Label>
                  </Link>
                  <Link to="/list" style={styles.linkStyle}>
                    <Label style={styles.whiteLabel}>Logs</Label>
                  </Link>
                  <Link to="/pricing" style={styles.linkStyle}>
                    <Label style={styles.whiteLabel}>Pricing</Label>
                  </Link>
                </div>

                <div style={styles.navBar.right}>
                  <Link to="/login" style={styles.linkStyle}>
                    <Label style={styles.whiteLabel}>Logout</Label>
                  </Link>
                  <Link to="/register" style={styles.linkStyle}>
                    <Label style={styles.whiteLabel}>Register</Label>
                  </Link>
                </div>
            </div>

            <div>
                <PrivateRoute exact path="/" component={HomePage} />
                <PrivateRoute exact path="/list" component={LogList} />
                <PrivateRoute exact path="/fuel-log" component={LogFormLayout} />
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
  const { alert, users } = state;
  return {
    alert,
    users
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };