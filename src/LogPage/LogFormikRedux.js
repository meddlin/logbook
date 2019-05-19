import React from 'react';
import { withFormik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { logActions } from '../_actions';
import * as Yup from 'yup';

import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

class LogFormikRedux extends React.Component {
    render() {
        const {
            values,
            touched,
            errors,
            dirty,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
        } = this.props;

        return (
            <Form>
                <Label>Create a new log</Label>
    
                <TextField 
                    name="logDate"
                    label="Log Date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.logDate} />
                {/* <Field 
                    style={fieldStyles}
                    name="logDate" 
                    label="Log Date" /> */}
    
                <TextField
                    name="odometer"
                    label="Odometer"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.odometer} />
                {/* <Field 
                    id="odometer"
                    name="odometer" /> */}
    
                <TextField
                    name="tripometer"
                    label="Tripometer"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.tripometer} />
    
                <TextField
                    name="fuelVolume"
                    label="Fuel Volume"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fuelVolume} />
                
                <TextField
                    name="price"
                    label="Price"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.price} />
    
                <DefaultButton 
                    type="submit"
                    text="Submit Btn" />
            </Form>
        );
    }
};

const formikEnhancer = withFormik({
    mapPropsToValues({ logDate, odometer, tripometer, fuelVolume, price }) {
		return {
			logDate: logDate || '',
			odometer: odometer || '',
			tripometer: tripometer || '', 
			fuelVolume: fuelVolume || '', 
			price: price || ''
		}
	},
    validationSchema: Yup.object().shape({
		logDate: Yup.string().required('Logdate is required.'),
		odometer: Yup.string().required('Odometer is required'),
		tripometer: Yup.string().required('Tripometer is required.'),
		fuelVolume: Yup.string().required('Fuel volume is required.'),
		price: Yup.string().required('Price is required.')
    }),
    handleSubmit: (values, { props, setSubmitting }) => {
        console.log(values);

        let userId = JSON.parse(localStorage.user).id;
		let fuelLog = { 
			logDate: values.logDate, 
			odometer: values.odometer, 
			tripometer: values.tripometer, 
			fuelVolume: values.fuelVolume, 
			price: values.price 
		};

		props.dispatch(logActions.createLog( userId, fuelLog ));

        setSubmitting(false);
    }
})(LogFormikRedux);

function mapStateToProps(state) {
    return {
      logs: state.log.fuelLogs
    };
}

const LogFormikConnection = connect(mapStateToProps)(formikEnhancer);
export { LogFormikConnection as LogFormikRedux };