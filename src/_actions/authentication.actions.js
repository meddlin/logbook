import { authenticationConstants } from '../_constants';
import { authenticationService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const authenticationActions = {
    login,
    logout
};

function login(username, password) {
	return dispatch => {
		dispatch(request({ username }));

		authenticationService.login(username, password)
			.then(
				user => {
					dispatch(success(user));
					history.push('/');
				},
				error => {
					dispatch(failure(error));
					dispatch(alertActions.error(error));
				}
			);
	};

	function request(user) { return { type: authenticationConstants.LOGIN_REQUEST, user } }
	function success(user) { return { type: authenticationConstants.LOGIN_SUCCESS, user } }
	function failure(error) { return { type: authenticationConstants.LOGIN_FAILURE, error } }
}

function logout() {
    return dispatch => {
        authenticationService.logout();
        dispatch(request());
        
        function request() { return { type: authenticationConstants.LOGOUT }};
    };
}