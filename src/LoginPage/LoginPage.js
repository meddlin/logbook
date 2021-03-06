import React from 'react';
import { withRouter } from 'react-router-dom';
import { LoginFormik } from './LoginFormik';
import styles from '../styling/styles';

class LoginPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>

				<div style={styles.formStyles.top} className="ms-Grid" dir="ltr">
					<div className="ms-Grid-row">
						<div className="ms-Grid-col ms-sm12 ms-md4 ms-lg4 ms-mdPush4 ms-lgPush4">
							<LoginFormik />
						</div>
					</div>
				</div>
            </div>
		);
	}
}

const loginPageWithRouter = withRouter(LoginPage);
export { loginPageWithRouter as LoginPage };