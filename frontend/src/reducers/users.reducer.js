import { USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, LOGOUT_USER, USER_PROFILE, EDIT_USER} from '../actions/user.action';

const initialState = {
    loginError: null,
    userProfile: {},
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loginError: null,
            };
        case USER_LOGIN_FAIL:
            return {
                ...state,
                loginError: action.payload,
            };
        case LOGOUT_USER:
            return {
                ...state,
                loginError: null,
                userProfile: '',
            };
        case USER_PROFILE:
            return {
                ...state,
                userProfile: action.payload,
            };

            case EDIT_USER:
                return {
                    ...state,
                    userProfile: {
                        ...state.userProfile,
                        userName: action.payload,
                    },
                };
        default:
            return state;
    }
};

export default usersReducer; 