import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tweetsApi = createApi({
  reducerPath: 'tweets',
  tagTypes: ['tweets'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6453a5b1c18adbbdfea35ef8.mockapi.io/',
  }),
  endpoints: builder => ({
    getUsers: builder.query({
      query: value => {
        const url = new URL(
          'https://6453a5b1c18adbbdfea35ef8.mockapi.io/tweets'
        );
        url.searchParams.append('page', 1);
        url.searchParams.append('limit', value);
        return url.toString();
      },
      providesTags: ['tweets'],
      
    }),
    setFollow: builder.mutation({
      query: data => ({
        url: `tweets/${data.id}`,
        method: 'PUT',
        body: {
          followers: data.followers,
          following: data.following,
        },
      }),
      invalidatesTags: ['tweets'],
    }),
  }),
});

export const { useGetUsersQuery, useSetFollowMutation } = tweetsApi;
