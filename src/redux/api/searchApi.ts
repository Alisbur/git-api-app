import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, BASE_URL_GQL } from "../../shared/constants";
import { GitResponse } from "../../shared/types";
// import { request, gql, ClientError } from 'graphql-request'

// type Query = {
//   search(searchString: String!): [Repository]
// }

// type Repository = {
//   id: number,
//   name: string,
// }

// const graphqlBaseQuery =
//   ({ baseUrl }: { baseUrl: string }) =>
//   async ({ body }: { body: string }) => {
//     try {
//       const result = await request(baseUrl, body)
//       return { data: result }
//     } catch (error) {
//       if (error instanceof ClientError) {
//         return { error: { status: error.response.status, data: error } }
//       }
//       return { error: { status: 500, data: error } }
//     }
//   }

// export const searchApi = createApi({
//   baseQuery: graphqlBaseQuery({
//     baseUrl: BASE_URL_GQL,
//   }),
//   endpoints: (builder) => ({
//     getResults: builder.query({
//       query: (id) => ({
//         body: gql`
//           query {
//             search(type:REPOSITORY, query:"tetris") {
//               repositoryCount
//             }
//           }
//         `,
//       }),
//       // transformResponse: (response) => response.posts.data,
//     }),
//   }),
// })

export const searchApi = createApi({
  reducerPath: 'repos',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    getResults: builder.query<response, string>({
      query: (query) => ({
        url: `?q=${query}&per_page=100&page=1`,
      })
    })
  })
});

export const {useLazyGetResultsQuery} = searchApi;