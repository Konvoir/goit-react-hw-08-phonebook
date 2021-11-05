const getUserName = (state) => state.auth.user.user.name;
const getAuthError = (state) => state.auth.error;
const getIsAuth = (state) => state.auth.isAuth;
const getToken = (state) => state.auth.user.token;

export { getUserName, getIsAuth, getToken, getAuthError };
