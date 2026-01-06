import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Tipagem do produto
// ⚠️ Use exatamente os campos que o projeto original usa
type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

// Tipagem do estado do carrinho
type CarrinhoState = {
  itens: Produto[]
}

// Estado inicial
const initialState: CarrinhoState = {
  itens: []
}

// Criação do slice
const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    // Adiciona produto ao carrinho
    adicionar: (state, action: PayloadAction<Produto>) => {
      state.itens.push(action.payload)
    },

    // Remove produto pelo ID
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    }
  }
})

// Exporta as actions
export const { adicionar, remover } = carrinhoSlice.actions

// Exporta o reducer
export default carrinhoSlice.reducer
