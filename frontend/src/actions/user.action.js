import axios from "axios";

export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
export const LOGOUT_USER = "LOGOUT_USER";
export const USER_PROFILE = "USER_PROFILE";
export const EDIT_USER = "EDIT_USER";
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

/**
 * Authenticate the user by logging in with provided email and password.
 *
 * @param {string} email - The user's email
 * @param {string} password - The user's password
 * @param {boolean} rememberMe - Flag to remember the user's login
 * @return {Promise} The response from the login API call
 */
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
                dispatch(fetchUser());
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

/**
 * Fetches the user profile from the server using the token stored in local storage.
 *
 * @param {function} dispatch - A function to dispatch actions to the Redux store.
 * @return {void}
 */
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
            console.log(error)
        }
    };
};

/**
 * Edit a user's information in the backend.
 *
 * @param {string} username - The new username to update.
 * @return {Promise} A promise that resolves when the user is successfully edited, or rejects with an error.
 */
export const editUser = (username) => {
    return async (dispatch) => {
        try {
            let token = localStorage.getItem("token");

            if (!token) {
                token = sessionStorage.getItem("token");
            }

            if (!token) {
                throw new Error("User not authenticated");
            }

            const response = await axios.put("http://localhost:3001/api/v1/user/profile", { username }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                dispatch({
                    type: EDIT_USER,
                    payload: username,
                });

                localStorage.setItem("username", username);
            } else {
                throw new Error("Failed to edit username");
            }
        } catch (error) {
            console.error(error);
        }
    };
};
