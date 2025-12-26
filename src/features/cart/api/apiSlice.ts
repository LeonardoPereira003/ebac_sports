import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../../../types'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api'
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Produto[], void>({
      query: () => 'ebac_sports/produtos'
    })
  })
})

export const { useGetProductsQuery } = apiSlice
