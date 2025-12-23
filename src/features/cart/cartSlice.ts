    import { createSlice, PayloadAction } from '@reduxjs/toolkit'

    interface CartItem {
    id: number
    nome: string
    preco: number
    imagem: string
    quantity: number
    }

    interface CartState {
    items: CartItem[]
    }

    const initialState: CartState = {
    items: []
    }

    const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<Omit<CartItem, 'quantity'>>) {
        const item = state.items.find(i => i.id === action.payload.id)

        if (item) {
            item.quantity += 1
        } else {
            state.items.push({ ...action.payload, quantity: 1 })
        }
        }
    }
    })

    export const { addItem } = cartSlice.actions
    export default cartSlice.reducer
