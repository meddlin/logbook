import { registrationConstants } from '../_constants';

export function registration(state = {}, action) {
  switch (action.type) {
    case registrationConstants.REGISTER_REQUEST:
      return Object.assign({}, ...state, {
        registering: true
      });
    case registrationConstants.REGISTER_SUCCESS:
      return Object.assign({}, ...state, {
        registering: false
      });
    case registrationConstants.REGISTER_FAILURE:
      return Object.assign({}, ...state, {
        registering: false
      });
    default:
      return state
  }
}