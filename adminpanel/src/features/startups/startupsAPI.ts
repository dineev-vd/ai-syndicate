import { api } from "../../services/api";
import { LocalStartup, Startup } from "./types";

export const startupsAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    startups: builder.query<Startup[], void>({
      query: () => "startups",
      transformResponse: () => [
        {
          id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          title: "string",
          description: "string",
          targetBudget: 0,
          domain: "string",
          currentStatus: "string",
        },
        {
          id: "24f423f234f342f43f43f42f23f132fzfdsagreh",
          title: "good one",
          description: "its the best",
          targetBudget: 120,
          domain: "string",
          currentStatus: "stat 1",
        },
        {
          id: "dsfdsfdsf3fa-sdfsd-ewrfe-b3fc-34sdgsdgfsdgf",
          title: "who are you?",
          description: "hello there",
          targetBudget: 300,
          domain: "string",
          currentStatus: "stat 2",
        },
      ],
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Startup" as const, id })),
              "Startup",
            ]
          : ["Startup"],
    }),
    createStartup: builder.mutation<Startup, LocalStartup>({
      query: (startup) => ({
        url: "startups",
        method: "POST",
        body: startup,
      }),
    }),
    updateStartup: builder.mutation<Startup, LocalStartup>({
      query: (startup) => ({
        url: "startups",
        method: "PUT",
        body: startup,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Startup", id: arg.id },
      ],
    }),
    deleteStartup: builder.mutation<Startup, string>({
      query: (id) => ({
        url: `startups/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Startup"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useStartupsQuery,
  useUpdateStartupMutation,
  useCreateStartupMutation,
  useDeleteStartupMutation,
} = startupsAPI;
