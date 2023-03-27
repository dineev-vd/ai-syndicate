import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../app/store";

export const serverUrl =
  // "https://aisyndicate.infostrategic.com/api/";
  "https://echo.zuplo.io";

const baseQuery = fetchBaseQuery({
  baseUrl: serverUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      // headers.set("token", token);
    }
    return headers;
  },
});

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  tagTypes: ["Startup"],
  endpoints: () => ({}),
});

type response = {
  success: true | false;
  message?: string;
  token?: string;
  user?: {
    email: string;
  };
};
