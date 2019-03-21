import { authHeader } from '../_helpers';

export const logService = {
	createLog
};

const config = {
	apiUrl: process.env.API_URL || 'https://localhost:5001'
};


function createLog(fuelLog) {
	let user = JSON.parse(localStorage.getItem('user'));

    const requestOptions = {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${user.token}`, 'Content-Type': 'application/json' },
        /*headers: new Headers(authHeader()).append('Content-Type', 'application/json'),*/
        body: JSON.stringify(fuelLog)
    };

    return fetch(`${config.apiUrl}/api/Log/CreateLog`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                /*logout();*/
                Location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}