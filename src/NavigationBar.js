import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Label } from 'office-ui-fabric-react';
import { IconButton } from 'office-ui-fabric-react/lib/Button';

class NavigationBar extends Component {

    render() {
        const { isLoggedIn, loggingIn } = this.props;

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
              cursor: 'pointer',
              textDecoration: 'none',
              margin: '0 0.25em 0 0.25em'
            },
            whiteLabel: {
              cursor: 'inherit',
              color: 'white'
            },
            rowLinks: {
              display: 'flex',
              flexDirection: 'row'
            }
        }

        return (
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
                  {
                      (isLoggedIn && !loggingIn) ? 
                      <Link to="/logout" style={styles.linkStyle}>
                        <Label style={styles.whiteLabel}>Logout</Label>
                      </Link> :
                      <div style={styles.rowLinks}>
                        <Link to="/login" style={styles.linkStyle}>
                          <Label style={styles.whiteLabel}>Sign In</Label>
                        </Link>
                        <Link to="/register" style={styles.linkStyle}>
                          <Label style={styles.whiteLabel}>Register</Label>
                        </Link>
                      </div>
                  }
                </div>
            
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert, authentication } = state;
    return {
      alert: alert,
      isLoggedIn: authentication.isLoggedIn,
      loggingIn: authentication.loggingIn
    };
  }

const connectedNavigationBar = connect(mapStateToProps)(NavigationBar);
export { connectedNavigationBar as NavigationBar };