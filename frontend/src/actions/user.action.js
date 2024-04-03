import axios from "axios";

export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
export const LOGOUT_USER = "LOGOUT_USER";
export const USER_PROFILE = "USER_PROFILE";

export const userLoginSuccess = () => ({
    type: USER_LOGIN_SUCCESS,
});

export const userLoginFail = (error) => ({
    type: USER_LOGIN_FAIL,
    payload: error,
});


export const logoutUser = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    return {
        type: LOGOUT_USER,
    };
};

export const loginUser = (email, password, rememberMe) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("http://localhost:3001/api/v1/user/login", {
                email: email,
                password: password,
            });

            if (response.status === 200) {
                const token = response.data.body.token;
                if (rememberMe) {
                    localStorage.setItem("token", token);
                } else {
                    sessionStorage.setItem("token", token);
                }
                dispatch(userLoginSuccess());
                return response; // Return the response when login is successful
            } else {
                localStorage.removeItem("token");
                sessionStorage.removeItem("token");
                return null; // Return null if login fails due to unexpected status
            }
        } catch (error) {
            dispatch(userLoginFail("Invalid username or password"));
            localStorage.removeItem("token");
            sessionStorage.removeItem("token");
            return null; // Return null if login fails due to error
        }
    };
};

export const fetchUser = () => {
    return async (dispatch) => {
        let token = localStorage.getItem("token");

        if (!token) {
            token = sessionStorage.getItem("token");
        }
        if (!token) {
            return;
        }

        try {
            const response = await axios.post("http://localhost:3001/api/v1/user/profile", {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            if (response.status === 200) {
                const userProfile = response.data.body;
                dispatch({
                    type: USER_PROFILE,
                    payload: userProfile,
                });
            }
        } catch (error) {
            console.error(error);
        }
    };
};
