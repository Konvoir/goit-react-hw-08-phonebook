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

export const register = createAsyncThunk(
  "auth/registration",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/singup", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error(`Something wrong ${error}`);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk();
