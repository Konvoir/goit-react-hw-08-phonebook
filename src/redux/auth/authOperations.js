import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const token = {
  set(token) {
    axios.defaults.headers.common["Authorization"] = token;
  },
  unset() {
    axios.defaults.headers.common["Authorization"] = "";
  },
};

const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/singup", credentials);
      token.set(data.token);
      // * После успешной регистрации добавляем токен в HTTP-заголовок
      return data;
    } catch (error) {
      toast.error(`Unfortunately, something go wrong! ${error}`);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const logIn = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    toast.error(`Unfortunately, something go wrong! ${error}`);
    return thunkAPI.rejectWithValue(error);
  }
});

const logOut = createAsyncThunk(
  "auth/logout",
  async (credentials, thunkAPI) => {
    try {
      await axios.post("/users/logout");
      token.unset();
      // * После успешного логаута, удаляем токен из HTTP-заголовка
      // return data;
    } catch (error) {
      toast.error(`Unfortunately, something go wrong! ${error}`);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//  * 1. Забираем токен из стейта через getState()
//  * 2. Если токена нет, выходим не выполняя никаких операций
//  * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.post("/users/current");
      // token.set(data.token);
      return data;
    } catch (error) {
      toast.error(`Unfortunately, something go wrong! ${error}`);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const authOperations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default authOperations;
