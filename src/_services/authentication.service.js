import { authHeader } from '../_helpers';

export const authenticationService = {
    login,
    logout
};

const config = {
	apiUrl: process.env.REACT_APP_API_URL || 'https://localhost:5001'
};

function login(username, password) {
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ username, password })
	};

	return fetch(`${config.apiUrl}/api/users/authenticate`, requestOptions)
		.then(handleResponse)
		.then(user => {
			// store user details and jwt token in local storage to keep user logged in between page refreshes
			localStorage.setItem('user', JSON.stringify(user));
			return user;
		});
}

function logout() {
	// remove user from local storage to log user out
    localStorage.removeItem('user');
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                Location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}