// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../types';

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
    reducerPath: 'prductsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://6222994f666291106a29f999.mockapi.io/api/v1/',
    }),

    tagTypes: ['Products'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products',
            providesTags: ['Products'],
            transformResponse: (response: Product[]) => response
        }),
    }),

});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export default productApi;