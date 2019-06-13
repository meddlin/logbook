import { authenticationService } from './authentication.service';
import { authHeader } from '../_helpers';

export const logService = {
	createLog,
    getLogListInDateRange
};

const config = {
	apiUrl: process.env.REACT_APP_API_URL || 'https://localhost:5001'
};

/**
* 
*/
function createLog(userId, fuelLog) {
	let user = JSON.parse(localStorage.getItem('user'));

    const requestOptions = {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${user.token}`, 'Content-Type': 'application/json' },
        /*headers: new Headers(authHeader()).append('Content-Type', 'application/json'),*/
        body: JSON.stringify(fuelLog)
    };

    return fetch(`${config.apiUrl}/api/Log/CreateLog?userId=${userId}`, requestOptions).then(handleResponse);
}

/**
* 
*/
function getLogListInDateRange(beginDate, endDate) {
    let user = JSON.parse(localStorage.getItem('user'));

    const requestOptions = {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${user.token}`, 'Content-Type': 'application/json' }
    };

    return fetch(`${config.apiUrl}/api/Log/GetLogListInDateRange?userId=${user.id}&beginDate=${beginDate}&endDate=${endDate}`, requestOptions)
            .then(handleResponse)
            .then(logs => {
                return logs;
            });
}

/**
* 
*/
function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                authenticationService.logout();
                Location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}