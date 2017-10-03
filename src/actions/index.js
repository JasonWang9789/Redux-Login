export const USERNAME_INPUT_CHANGE = 'USERNAME_INPUT_CHANGE';
export const PASSWORD_INPUT_CHANGE = 'PASSWORD_INPUT_CHANGE';
export const SIGNIN_CLICK = 'SIGNIN_CLICK';

export function usernameInputChange(text) {
    return {
        type: USERNAME_INPUT_CHANGE,
        usernameValue: text
    }
}

export function passwordInputChange(text) {
    return {
        type: PASSWORD_INPUT_CHANGE,
        passwordValue: text
    }
}

export function signinClick() {
    return {
        type: SIGNIN_CLICK,
    }
}

