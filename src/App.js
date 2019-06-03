import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { ContextualMenuItemType } from 'office-ui-fabric-react/lib/ContextualMenu';

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
                    <DefaultButton
                      text="Click for ContextualMenu"
                      menuProps={{
                        shouldFocusOnMount: true,
                        items: [
                          {
                            key: 'newItem',
                            text: 'New',
                            onClick: () => console.log('New clicked')
                          },
                          {
                            key: 'divider_1',
                            itemType: ContextualMenuItemType.Divider
                          },
                          {
                            key: 'rename',
                            text: 'Rename',
                            onClick: () => console.log('Rename clicked')
                          },
                          {
                            key: 'edit',
                            text: 'Edit',
                            onClick: () => console.log('Edit clicked')
                          },
                          {
                            key: 'properties',
                            text: 'Properties',
                            onClick: () => console.log('Properties clicked')
                          },
                          {
                            key: 'linkNoTarget',
                            text: 'Link same window',
                            href: 'http://bing.com'
                          },
                          {
                            key: 'linkWithTarget',
                            text: 'Link new window',
                            href: 'http://bing.com',
                            target: '_blank'
                          },
                          {
                            key: 'linkWithOnClick',
                            name: 'Link click',
                            href: 'http://bing.com',
                            onClick: (ev: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
                              alert('Link clicked');
                              ev.preventDefault();
                            },
                            target: '_blank'
                          },
                          {
                            key: 'disabled',
                            text: 'Disabled item',
                            disabled: true,
                            onClick: () => console.error('Disabled item should not be clickable.')
                          }
                        ]
                      }}
                    />

                    <Button size="medium" color="default">
                        <Link to="/fuel-log" style={linkStyle}>Add Log</Link>
                    </Button>
                    <Button size="medium" color="default">
                        <Link to="/list" style={linkStyle}>Logs</Link>
                    </Button>


                    <Button size="medium" color="default">
                        <Link to="/login" style={linkStyle}>Logout</Link>
                    </Button>
                    <Button size="medium" color="default">
                        <Link to="/register" style={linkStyle}>Register</Link>
                    </Button>
                    <Button size="medium" color="default">
                        <Link to="/pricing" style={linkStyle}>Pricing</Link>
                    </Button>
                </Toolbar>
            </AppBar>
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
  const { alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };