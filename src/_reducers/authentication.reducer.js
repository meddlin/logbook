import { authenticationConstants } from '../_constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { isLoggedIn: true, user } : {};

export function authentication(state = initialState, action) {
	switch (action.type) {
	    case authenticationConstants.LOGIN_REQUEST:
	        return Object.assign({}, state, {
		        loggingIn: true,
		        user: action.user
	        });
	    case authenticationConstants.LOGIN_SUCCESS:
	        return Object.assign({}, state, {
				user: action.user,
				loggingIn: false,
				isLoggedIn: true
	        });
	    case authenticationConstants.LOGIN_FAILURE:
	        return Object.assign({}, state, {
				loggingIn: false,
				isLoggedIn: false,
				error: action.error 
			});
	    case authenticationConstants.LOGOUT:
			return Object.assign({}, ...state, {
				user: '',
				loggingIn: false,
				isLoggedIn: false
			});
			
	    default:
	        return state
    }
}