import { userConstants } from '../_constants';

export function users(state = {}, action) {
	switch (action.type) {
		case userConstants.GETALL_REQUEST: 
			return Object.assign({}, ...state, { 
				loading: true 
			});
		case userConstants.GETALL_SUCCESS: 
			return Object.assign({}, ...state, {
				items: action.users 
			});
		case userConstants.GETALL_FAILURE: 
			return Object.assign({}, ...state, { 
				error: action.error 
			});

		default:
			return state;
	}
}