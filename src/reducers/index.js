import {combineReducers} from 'redux'
import {USERNAME_INPUT_CHANGE, PASSWORD_INPUT_CHANGE, SIGNIN_CLICK} from '../actions/index'

function inputValid(state = INITIAL_STATE, action) {
    switch (action.type) {
        case USERNAME_INPUT_CHANGE:
            return Object.assign({}, state, {
                usernameValue: action.usernameValue
            });
        case PASSWORD_INPUT_CHANGE:
            return Object.assign({}, state, {
                passwordValue: action.passwordValue
            });
        case SIGNIN_CLICK:
            if (state.usernameValue === 'Hello' && state.passwordValue === 'World') {
                return Object.assign({}, state, {
                    isValidated: true
                });
            }
            return INITIAL_STATE;
        default:
            return state;
    }
}

const INITIAL_STATE = {
    usernameValue: '',
    passwordValue: '',
    isValidated: false
};

const inputValidation = combineReducers({
    inputValid,
});

export default inputValidation;
