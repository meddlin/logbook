import { logConstants } from '../_constants';

export function log(state = {}, action) {
	switch(action.type) {
		case logConstants.CREATE_LOG_REQUEST:
			return {
				loading: true
			};
		case logConstants.CREATE_LOG_SUCCESS:
			return {
				loading: false
			};
		case logConstants.CREATE_LOG_FAILURE:
			return {
				error: action.error
			};

		case logConstants.LOG_LIST_BY_DATE_REQUEST:
			return {
				loading: true
			};
		case logConstants.LOG_LIST_BY_DATE_SUCCESS:
			return {
				fuelLogs: action.fuelLogs,
				loading: false
			};
		case logConstants.LOG_LIST_BY_DATE_FAILURE:
			return {
				error: action.error
			};

		default:
			return state;
	}
}