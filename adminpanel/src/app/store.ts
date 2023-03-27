import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { authAPI } from "../features/auth/authAPI";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistCombineReducers,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import authReducer from "../features/auth/authSlice";

const persistConfig = {
  key: "root",
  whitelist: ["auth"],
  storage,
};

const persistedReducer = persistCombineReducers(persistConfig, {
  [authAPI.reducerPath]: authAPI.reducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authAPI.middleware),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
