import { logConstants } from '../_constants';
import { logService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const logActions = {
	createLog,
    getLogListInDateRange
};

/**
* 
*/
function createLog(userId, fuelLog) {
	return dispatch => {
        dispatch(request(userId, fuelLog));

        logService.createLog(userId, fuelLog)
            .then(
                fuelLog => { 
                    dispatch(success());
                    dispatch(alertActions.success('Log created!'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(fuelLog) { return { type: logConstants.CREATE_LOG_REQUEST, fuelLog } }
    function success(fuelLog) { return { type: logConstants.CREATE_LOG_SUCCESS, fuelLog } }
    function failure(error) { return { type: logConstants.CREATE_LOG_FAILURE, error } }
}

/**
* 
*/
function getLogListInDateRange(beginDate, endDate) {
    return dispatch => {
        dispatch(request(beginDate, endDate));

        logService.getLogListInDateRange(beginDate, endDate)
            .then(
                fuelLogs => {
                    dispatch(success(fuelLogs));
                    dispatch(alertActions.success('List retrieved.'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(fuelLog) { return { type: logConstants.LOG_LIST_BY_DATE_REQUEST, fuelLog } }
    function success(fuelLogs) { return { type: logConstants.LOG_LIST_BY_DATE_SUCCESS, fuelLogs } }
    function failure(error) { return { type: logConstants.LOG_LIST_BY_DATE_FAILURE, error } }
}