import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['users'],
  endpoints: builder => ({
    addUserData: builder.mutation({
      query: ({ data }) => ({
        url: `/users/calculator`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['users'],
    }),
  }),
});

export const { useAddUserDataMutation } = usersApi;
