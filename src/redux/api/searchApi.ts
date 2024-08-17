import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, BASE_URL_GQL } from "../../shared/constants";
import { GitResponse } from "../../shared/types";

export const searchApi = createApi({
  reducerPath: 'repos',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    getResults: builder.query<GitResponse, string>({
      query: (query) => ({
        url: `?q=${query}&per_page=100&page=1`,
      }),
    }),
  }),
});

export const {useLazyGetResultsQuery} = searchApi;