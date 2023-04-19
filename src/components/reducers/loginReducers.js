export const email = (prevEmailState, action) => {
    switch (action.type) {
        case "SET_EMAIL": {
            return {
                ...prevEmailState,
                email: action.val,
            };
        }
        case "EMAIL_VALID": {
            return {
                ...prevEmailState,
                isValid: action.val,
            };
        }
        default:
            break;
    }
};

export const password = (prevPasswordState, action) => {
    switch (action.type) {
        case "SET_PASSWORD": {
            return {
                ...prevPasswordState,
                password: action.val,
            };
        }
        case "PASSWORD_VALID": {
            return {
                ...prevPasswordState,
                isValid: action.val,
            };
        }
        default:
            break;
    }
};
