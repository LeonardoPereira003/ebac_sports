  import { useDispatch } from 'react-redux'
  import { useGetProductsQuery } from '../features/cart/api/apiSlice'
  import { addItem } from '../features/cart/cartSlice'
  import Produto from '../components/Produto'
  import { Produto as ProdutoType } from '../types'

  const Produtos: React.FC = () => {
    const dispatch = useDispatch()
    const { data: products, isLoading, isError } = useGetProductsQuery()

    if (isLoading) return <p>Carregando...</p>
    if (isError) return <p>Erro ao carregar produtos</p>

    return (
      <div>
        {products?.map((p: ProdutoType) => (
          <Produto
            key={p.id}
            produto={p}
            onAddToCart={() =>
              dispatch(
                addItem({
                  id: p.id,
                  nome: p.nome,
                  preco: p.preco,
                  imagem: p.imagem
                })
              )
            }
          />
        ))}
      </div>
    )
  }

  export default Produtos
