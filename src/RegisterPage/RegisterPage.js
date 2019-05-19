import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { RegisterForm } from './RegisterForm';
import styles from '../styling/styles';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={styles.formStyles.top} className="ms-Grid" dir="ltr">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm12 ms-md4 ms-lg4 ms-mdPush4 ms-lgPush4">
                        <RegisterForm />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage };