import React from 'react';
import { LogFormikRedux } from './LogFormikRedux';

export class LogFormLayout extends React.Component {

    render() {
        return (
            <div class="ms-Grid" dir="ltr">
                <div class="ms-Grid-row">
                    <div class="ms-Grid-col ms-sm12 ms-md6 ms-lg6 ms-mdPush3 ms-lgPush3">
                        <LogFormikRedux />
                    </div>
                </div>
            </div>
        );        
    }
}