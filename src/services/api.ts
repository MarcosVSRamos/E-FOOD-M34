import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Prato, Restaurante } from '../pages/Home'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    reciever: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ebac-fake-api.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    getBanner: builder.query<Restaurante[], string>({
      query: (id) => `restaurantes/${id}`
    }),
    getCardapio: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getPratos: builder.query<Prato, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantesQuery,
  useGetBannerQuery,
  useGetCardapioQuery,
  useGetPratosQuery,
  usePurchaseMutation
} = api
