import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export const CustomLogForm = (props) => {
	const {
		values: { logDate, odometer, tripometer, fuelVolume, price },
		errors,
		touched,
		handleSubmit,
		handleChange,
		isValid,
		setFieldTouched
	} = props;

	const change = (name, e) => {
		e.persist();
		handleChange(e);
		setFieldTouched(name, true, false);
	};

	return (
		<form onSubmit={() => { alert("submitted") }}>
			<TextField 
                id="logDate"
                name="logDate"
                label="Log Date"
                helperText={touched.logDate ? errors.logDate : ""}
                error={touched.logDate && Boolean(errors.logDate)}
                value={logDate}
                onChange={change.bind(null, "logDate")}
                fullWidth />

	        <TextField 
	            id="odometer"
	            name="odometer"
	            label="Odometer"
	            helperText={touched.odometer ? errors.odometer : ""}
                error={touched.odometer && Boolean(errors.odometer)}
                value={odometer}
                onChange={change.bind(null, "odometer")}
	            fullWidth />

	        <TextField
	        	id="tripometer"
	            name="tripometer"
	            label="Tripometer"
	            helperText={touched.logDate ? errors.logDate : ""}
                error={touched.tripometer && Boolean(errors.tripometer)}
                value={tripometer}
                onChange={change.bind(null, "tripometer")}
	            fullWidth />

	        <TextField
	        	id="fuelVolume"
	            name="fuelVolume"
	            label="Fuel Volume"
	            helperText={touched.fuelVolume ? errors.fuelVolume : ""}
                error={touched.fuelVolume && Boolean(errors.fuelVolume)}
                value={fuelVolume}
                onChange={change.bind(null, "fuelVolume")}
	            fullWidth />

	        <TextField
	        	id="price"
	            name="price"
	            label="Price"
	            helperText={touched.price ? errors.price : ""}
                error={touched.price && Boolean(errors.price)}
                value={price}
                onChange={change.bind(null, "price")}
	            fullWidth />

	        <Button
	        	type="submit"
	        	fullWidth
	        	variant="raised"
	        	color="primary">Submit
	        </Button>
		</form>
	);
};