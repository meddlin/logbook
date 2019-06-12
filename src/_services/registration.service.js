import { authHeader } from '../_helpers';
import { authenticationService } from './authentication.service';

export const registrationService = {
	register
};

const config = {
	apiUrl: process.env.REACT_APP_API_URL || 'https://localhost:5001'
};

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

	return fetch(`${config.apiUrl}/api/users/register`, requestOptions)
		.then(handleResponse);
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