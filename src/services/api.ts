import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant, Snak } from '../types'

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
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    }),
    getBanner: builder.query<Restaurant[], string>({
      query: (id) => `restaurantes/${id}`
    }),
    getMenu: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getSnaks: builder.query<Snak, string>({
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
  useGetBannerQuery,
  useGetMenuQuery,
  useGetRestaurantsQuery,
  useGetSnaksQuery,
  usePurchaseMutation
} = api
