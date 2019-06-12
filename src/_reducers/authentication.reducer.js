import { authenticationConstants } from '../_constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
	switch (action.type) {
	    case authenticationConstants.LOGIN_REQUEST:
	        return Object.assign({}, ...state, {
		        loggingIn: true,
		        user: action.user
	        });
	    case authenticationConstants.LOGIN_SUCCESS:
	        return Object.assign({}, ...state, {
				user: action.user,
				isLoggedIn: true
	        });
	    case authenticationConstants.LOGIN_FAILURE:
	        return Object.assign({}, ...state, {
				error: action.error 
			});
	    case authenticationConstants.LOGOUT:
			return Object.assign({}, ...state, {
				user: '',
				isLoggedIn: false
			});
			
	    default:
	        return state
    }
}