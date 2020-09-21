import fire from "./../fire";

export const fetchUserInfo = () => {
  return (dispatch) => {
    dispatch(loginRequest());
    try {
      fire.auth().onAuthStateChanged((user) => {
        if (user) {
          const userData = {
            displayName: user.displayName,
            email: user.email,
            // phoneNumber: user.phoneNumber === null ? "empty" : user.phoneNumber,
            photoURL: user.photoURL,
            uid: user.uid,
          };
          dispatch(loginSuccess(userData));
          fire.database().ref(userData.uid).set(userData);
        }
      });
    } catch {
      console.log("error");
    }
  };
};

export const loginRequest = () => {
  return { type: "LOGIN_REQUEST" };
};
export const loginSuccess = (payload) => {
  return { type: "LOGIN_SUCCESS", payload };
};
export const loginError = (payload) => {
  return { type: "LOGIN_ERROR", payload };
};

export const userLogout = () => {
  return (dispatch) => {
    fire
      .auth()
      .signOut()
      .then((user) => {
        const userData = {
          displayName: undefined,
          email: undefined,
          // phoneNumber: undefined,
          photoURL: undefined,
          uid: undefined,
        };
        console.log(user);
        dispatch(logoutRequest(userData));
      });
  };
};
export const logoutRequest = (payload) => {
  return { type: "LOGOUT_REQUEST", payload };
};
