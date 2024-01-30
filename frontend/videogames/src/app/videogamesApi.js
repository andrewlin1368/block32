import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const videogamesApi = createApi({
  reducerPath: "videogamesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/" }),
  endpoints: (builder) => ({
    getVideoGames: builder.query({ query: () => "/video-games" }),
    getVideoGame: builder.query({ query: (id) => `/video-games/${id}` }),
    deleteVideoGame: builder.mutation({
      query: (id) => ({
        url: `/video-games/${id}`,
        method: "DELETE",
      }),
    }),
    newVideoGame: builder.mutation({
      query: (body) => ({
        url: `/video-games`,
        method: "POST",
        body: body,
      }),
    }),
    updateVideoGame: builder.mutation({
      query: ({body, id}) => ({
        url: `/video-games/${id}`,
        method: "PUT",
        body: body,
      }),
    }),
  }),
});

export const {
  useGetVideoGamesQuery,
  useGetVideoGameQuery,
  useDeleteVideoGameMutation,
  useNewVideoGameMutation,
  useUpdateVideoGameMutation,
} = videogamesApi;
