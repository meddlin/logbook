import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import styles from '../styling/styles';

class RegisterForm extends React.Component {
    render() {
        const {
            values,
            touched,
            errors,
            dirty,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            isSubmitting
        } = this.props;

        return (
            <Form>
                <TextField 
                    name="firstName"
                    label="First Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName} />
                {(touched.firstName && errors.firstName) ? <div>{errors.firstName}</div> : ""}

                <TextField 
                    name="lastName"
                    label="Last Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName} />
                {(touched.lastName && errors.lastName) ? <div>{errors.lastName}</div> : ""}

                <TextField 
                    name="username"
                    label="Username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username} />
                {(touched.username && errors.username) ? <div>{errors.username}</div> : ""}

                <TextField 
                    name="password"
                    label="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    type="password" />
                {(touched.password && errors.password) ? <div>{errors.password}</div> : ""}

                <div style={styles.formStyles.buttons}>
                    <PrimaryButton 
                        type="submit"
                        text="Register" 
                    />
                    <DefaultButton 
                        type="submit"
                        text="Clear"
                        onClick={handleReset} 
                    />
                </div>
                
            </Form>
        );
    }
};

const formikEnhancer = withFormik({
    mapPropsToValues({ firstName, lastName, username, password }) {
		return {
			firstName: firstName || '', 
            lastName: lastName || '',
            username: username || '',
            password: password || ''
		}
	},
    validationSchema: Yup.object().shape({
		username: Yup.string().required('User name is required.'),
		password: Yup.string().required('Password is required')
    }),
    handleSubmit: (values, { props, setSubmitting }) => {
		let user = { 
			firstName: values.firstName, 
            lastName: values.lastName,
            username: values.username,
            password: values.password
        };

		if (user.username && user.password)
            props.dispatch(userActions.register(user));

        setSubmitting(false);
    }
})(RegisterForm);

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const RegisterFormConnection = connect(mapStateToProps)(formikEnhancer);
export { RegisterFormConnection as RegisterForm };