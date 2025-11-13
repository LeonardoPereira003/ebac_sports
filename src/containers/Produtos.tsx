// src/containers/Produtos.tsx
import React from 'react'
import { useGetProductsQuery } from '../features/api/apiSlice'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cart/cartSlice'
import Produto from '../components/Produto' // ajuste se o import for diferente

const Produtos: React.FC = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery()
  const dispatch = useDispatch()

  if (isLoading) return <p>Carregando...</p>
  if (isError) return <p>Erro ao carregar produtos</p>

  return (
    <div>
      {products?.map((p: any) => (
        <div key={p.id}>
          {/* Ajuste a renderização para seu layout — aqui ex.: */}
          <h3>{p.title || p.name}</h3>
          <p>R$ {p.price}</p>
          <button onClick={() => dispatch(addItem({
            id: p.id,
            title: p.title || p.name,
            price: p.price,
            image: p.image
          }))}>
            Adicionar ao carrinho
          </button>
        </div>
      ))}
    </div>
  )
}

export default Produtos
