import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Prato } from '../../pages/Home'

type CartState = {
  items: Prato[]
  isOpen: boolean
  checkout: boolean
  findCheckout: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  checkout: false,
  findCheckout: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Prato>) => {
      const prato = state.items.find((item) => item.id === action.payload.id)

      if (!prato) {
        state.items.push(action.payload)
      } else {
        alert('O prato já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clearCart: (state) => {
      state.items = []
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    openCheckout: (state) => {
      state.checkout = true
    },
    closeCheckout: (state) => {
      state.checkout = false
    },
    toFindCheckout: (state) => {
      state.findCheckout = true
    },
    exitFindCheckout: (state) => {
      state.findCheckout = false
    }
  }
})

export const {
  add,
  open,
  close,
  remove,
  openCheckout,
  closeCheckout,
  toFindCheckout,
  exitFindCheckout,
  clearCart
} = cartSlice.actions

export default cartSlice.reducer
