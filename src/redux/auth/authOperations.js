import axios from "axios";
import * as contactsApi from "../../api/contactsApi";

import * as actions from "./authActions";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const userRegister = (userData) => async (dispatch) => {
  dispatch(actions.userRegisterRequest());
  try {
    const newUser = await contactsApi.registerUserApi(userData);
    dispatch(actions.userRegisterSuccess(newUser));
    token.set(newUser.token);
  } catch (error) {
    dispatch(actions.userRegisterError(error));
  }
};

export const userLogin = (userData) => async (dispatch) => {
  dispatch(actions.userLoginRequest());
  try {
    const loginUser = await contactsApi.loginUserApi(userData);
    dispatch(actions.userLoginSuccess(loginUser));
    token.set(loginUser.token);
  } catch (error) {
    dispatch(actions.userLoginError(error));
  }
};

export const userLogOut = () => (dispatch) => {
  dispatch(actions.userLogOutRequest());
  try {
    dispatch(actions.userLogOutSuccess(contactsApi.logOutUserApi()));
    token.unSet();
  } catch (error) {
    dispatch(actions.userLogOutError(error));
  }
};

export const currentUser = () => (dispatch, getState) => {
  dispatch(actions.userRefreshRequest());
  const persistedToken = getState().auth.user.token;
  if (persistedToken === null) {
    return;
  }
  token.set(persistedToken);
  try {
    dispatch(actions.userRefreshSuccess(contactsApi.fetchCurrentUser()));
  } catch (error) {
    dispatch(actions.userRefreshError(error));
  }
};
