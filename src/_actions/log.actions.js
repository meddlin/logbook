import { userConstants } from '../_constants';
import { logService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const logActions = {
	createLog
};

function createLog(fuelLog) {
	return dispatch => {
        dispatch(request(fuelLog));

        logService.createLog(fuelLog)
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

    function request(fuelLog) { return { type: userConstants.REGISTER_REQUEST, fuelLog } }
    function success(fuelLog) { return { type: userConstants.REGISTER_SUCCESS, fuelLog } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}