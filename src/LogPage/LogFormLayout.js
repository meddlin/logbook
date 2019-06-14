import React from 'react';
import { withRouter } from 'react-router-dom';
import { LogFormikRedux } from './LogFormikRedux';
import styles from '../styling/styles';

class LogFormLayout extends React.Component {

    render() {
        return (
            <div style={styles.formStyles.top} className="ms-Grid" dir="ltr">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm12 ms-md4 ms-lg4 ms-mdPush4 ms-lgPush4">
                        <LogFormikRedux />
                    </div>
                </div>
            </div>
        );        
    }
}

const logFormPageWithRouter = withRouter(LogFormLayout);
export { logFormPageWithRouter as LogFormLayout };