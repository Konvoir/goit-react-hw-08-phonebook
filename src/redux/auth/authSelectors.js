const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUsername = (state) => state.auth.user.name;

const getUserToken = (state) => state.auth.token;

const getIsFetchingCurrent = (state) => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUserToken,
  getUsername,
  getIsFetchingCurrent,
};
export default authSelectors;
