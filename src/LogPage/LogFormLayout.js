import React from 'react';
import { LogFormikRedux } from './LogFormikRedux';
import styles from './styles';

export class LogFormLayout extends React.Component {

    render() {
        return (
            <div style={styles.formStyles.top} className="ms-Grid" dir="ltr">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg6 ms-mdPush3 ms-lgPush3">
                        <LogFormikRedux />
                    </div>
                </div>
            </div>
        );        
    }
}