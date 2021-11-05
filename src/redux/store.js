import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage";
import authReducer from "./auth/authReducers";
import contacts from "./phonebook/reducers";

const contatcsPersistConfig = {
  key: "auth",
  storage,
  blacklist: ["error"],
};

export const store = configureStore({
  reducer: {
    contacts,
    auth: persistReducer(contatcsPersistConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [
          "contacts/filterContact",
          "auth/userRefreshSuccess",
          "auth/userLogOutSuccess",
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
});

export const persistor = persistStore(store);
