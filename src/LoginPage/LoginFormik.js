import React from 'react';
import { withFormik, Form } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { authenticationActions } from '../_actions';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { store } from '../_helpers';

class LoginFormik extends React.Component {
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
                    name="username"
                    label="Username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username} />
                {(touched.username && errors.username) ? <div>{errors.username}</div> : ""}

                <TextField
                    name="password"
                    label="Password"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password} />
                {(touched.password && errors.password) ? <div>{errors.password}</div> : ""}

                <Checkbox 
                    name="rememberMe"
                    label="Remember Me"
                    onChange={handleChange} />
                
                <PrimaryButton 
                    type="submit"
                    text="Submit" />
            </Form>
        );
    }
};

const formikEnhancer = withFormik({
    mapPropsToValues({ username, password, rememberMe }) {
        return {
            username: username || '',
            password: password || '',
            rememberMe: rememberMe || ''
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    }),
    handleSubmit: (values, { props, setSubmitting }) => {
        const { username, password } = values;
        if (username && password) {
            //props.dispatch(authenticationActions.login(username, password));
            store.dispatch(authenticationActions.login(username, password));
        }

        setSubmitting(false);
    }
})(LoginFormik);

function mapStateToProps(state) {
    const { user } = state;
    return {
        user: user
    };
}

const LoginFormikConnection = connect(mapStateToProps)(formikEnhancer);
export { LoginFormikConnection as LoginFormik };