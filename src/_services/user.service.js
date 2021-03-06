import { authHeader } from '../_helpers';
import { authenticationService } from './authentication.service';

export const userService = {
	getAll
};

const config = {
	apiUrl: process.env.REACT_APP_API_URL || 'https://localhost:5001'
};

function getAll() {
	const requestOptions = { 
		method: 'GET',
		headers: authHeader()
	};

	return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

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