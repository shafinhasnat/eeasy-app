const initState = {
  loading: false,
  loginStatus: false,
  userInfo: [],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { loading: true, loginStatus: false };
    case "LOGIN_SUCCESS":
      return { loading: false, loginStatus: true, userInfo: action.payload };
    case "LOGIN_ERROR":
      return { loading: false, loginStatus: false };
    case "LOGOUT_REQUEST":
      console.log("LOGOUT_REQUEST");
      return { userInfo: action.payload, loginStatus: false };
    default:
      return state;
  }
};
export default rootReducer;
