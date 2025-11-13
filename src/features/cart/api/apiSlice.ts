    import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

    export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.ebac-sports.vercel.app/' }),
    endpoints: (builder) => ({
        getProducts: builder.query<any[], void>({
        query: () => 'products'
        })
    })
    })

    export const { useGetProductsQuery } = apiSlice
