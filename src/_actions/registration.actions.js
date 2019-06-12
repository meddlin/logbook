import { registrationConstants } from '../_constants';
import { registrationService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const registrationActions = {
    register
};

function register(user) {
    return dispatch => {
        dispatch(request(user));

        registrationService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: registrationConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: registrationConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: registrationConstants.REGISTER_FAILURE, error } }
}