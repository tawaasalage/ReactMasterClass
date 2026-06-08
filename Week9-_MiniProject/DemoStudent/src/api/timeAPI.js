import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const timeAPI = createApi({
  reducerPath: "timeAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://aisenseapi.com/services/v1",
  }),
  endpoints: (builder) => ({
    getCurrentUTCTime: builder.query({
      query: () => "/datetime",
    }),
  }),
});

export const { useGetCurrentUTCTimeQuery } = timeAPI;
