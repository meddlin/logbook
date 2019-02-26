const express = require('express'); // backend server
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const request = require('request');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3500;

app.get('/api/hello', (req, res) => {
	res.send({ express: 'Hello from Express' });
});

app.get('/api/makecall', (req, res) => {
	request('http://www.google.com', (err, res, body) => {
		if (!err && res.statusCode == 200) console.log(body);
	});
});

app.put('/api/Log/CreateLog', (req, res) => {
	debugger;
	request({
		url: 'http://localhost:5000/api/Log/CreateLog',
		method: 'PUT',
		json: { logDate: new Date(), odometer: '123456', tripometer: '321', fuelVolume: '14.3', price: '36.75' }
	}, (err, res) => {
		if (err) console.log(`request's err: ${err}`);
		if (res) console.log(`request's res: ${res}`);
	});
});

app.listen(port, () => console.log(`Listening on port ${port}`));