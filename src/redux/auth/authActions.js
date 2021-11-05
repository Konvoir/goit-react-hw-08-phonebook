import { createAction } from "@reduxjs/toolkit";

export const userRegisterRequest = createAction("auth/userRegisterRequest");
export const userRegisterSuccess = createAction("auth/userRegisterSuccess");
export const userRegisterError = createAction("auth/userRegisterError");

export const userLoginRequest = createAction("auth/userLoginRequest");
export const userLoginSuccess = createAction("auth/userLoginSuccess");
export const userLoginError = createAction("auth/userLoginError");

export const userLogOutRequest = createAction("auth/userLogOutRequest");
export const userLogOutSuccess = createAction("auth/userLogOutSuccess");
export const userLogOutError = createAction("auth/userLogOutError");

export const userRefreshRequest = createAction("auth/userRefreshRequest");
export const userRefreshSuccess = createAction("auth/userRefreshSuccess");
export const userRefreshError = createAction("auth/userRefreshError");
