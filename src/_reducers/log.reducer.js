import { logConstants } from '../_constants';

export function log(state = {}, action) {
	switch(action.type) {
		case logConstants.CREATE_LOG_REQUEST:
			return Object.assign({}, ...state, {
				loading: true
			});
		case logConstants.CREATE_LOG_SUCCESS:
			return Object.assign({}, ...state, {
				loading: false
			});
		case logConstants.CREATE_LOG_FAILURE:
			return Object.assign({}, ...state, {
				error: action.error
			});

		case logConstants.LOG_LIST_BY_DATE_REQUEST:
			return Object.assign({}, state, {
				fuelLogs: [],
				loading: true
			});
		case logConstants.LOG_LIST_BY_DATE_SUCCESS:
			return Object.assign({}, state, {
				fuelLogs: action.fuelLogs,
				loading: false
			});
		case logConstants.LOG_LIST_BY_DATE_FAILURE:
			return Object.assign({}, ...state, {
				error: action.error
			});

		default:
			return state;
	}
}