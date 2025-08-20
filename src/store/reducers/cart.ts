import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Snak } from '../../types'

type CartState = {
  items: Snak[]
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
    add: (state, action: PayloadAction<Snak>) => {
      const snak = state.items.find((item) => item.id === action.payload.id)

      if (!snak) {
        state.items.push(action.payload)
      } else {
        alert('O prato já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
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
    },
    clear: (state) => {
      state.items = []
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
  clear
} = cartSlice.actions

export default cartSlice.reducer
