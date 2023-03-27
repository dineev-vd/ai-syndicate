import { api } from "../../services/api";

export const authAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<void, { email: string; password: string }>({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useLoginMutation } = authAPI;
