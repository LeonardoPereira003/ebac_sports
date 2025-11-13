    import { createSlice, PayloadAction } from '@reduxjs/toolkit'

    interface CartItem {
    id: number
    title: string
    price: number
    image?: string
    quantity: number
    }

    interface CartState {
    items: CartItem[]
    totalQuantity: number
    totalPrice: number
    }

    const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
    }

    const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<Omit<CartItem, 'quantity'>>) {
        const product = action.payload
        const existing = state.items.find(i => i.id === product.id)

        if (existing) {
            existing.quantity += 1
        } else {
            state.items.push({ ...product, quantity: 1 })
        }

        state.totalQuantity += 1
        state.totalPrice += product.price
        },

        removeItem(state, action: PayloadAction<number>) {
        const id = action.payload
        const item = state.items.find(i => i.id === id)

        if (item) {
            state.totalQuantity -= item.quantity
            state.totalPrice -= item.price * item.quantity
        }

        state.items = state.items.filter(i => i.id !== id)
        }
    }
    })

    export const { addItem, removeItem } = cartSlice.actions
    export default cartSlice.reducer
