import React from 'react';
import { LogFormikRedux } from './LogFormikRedux';
import styles from './styles';

export class LogFormLayout extends React.Component {

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