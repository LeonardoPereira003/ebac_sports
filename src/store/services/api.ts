import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Criação da API com RTK Query
export const api = createApi({
  // Nome interno do reducer
  reducerPath: 'api',

  // Configuração da URL base
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/ebac_sports'
  }),

  // Endpoints (rotas)
  endpoints: (builder) => ({
    // Endpoint para buscar os produtos
    getProdutos: builder.query<any[], void>({
      query: () => 'produtos'
    })
  })
})

// Hook gerado automaticamente
export const { useGetProdutosQuery } = api
