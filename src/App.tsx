import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { RootState } from './store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  // Produtos continuam vindo da API (mantido)
  const [produtos, setProdutos] = useState<Produto[]>([])

  // Favoritos continuam como estado local
  const [favoritos, setFavoritos] = useState<Produto[]>([])

  // ✅ Carrinho agora vem do Redux
  const carrinho = useSelector(
    (state: RootState) => state.carrinho.itens
  )

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => setProdutos(res))
  }, [])

  function favoritar(produto: Produto) {
    if (favoritos.find((p) => p.id === produto.id)) {
      const favoritosSemProduto = favoritos.filter(
        (p) => p.id !== produto.id
      )
      setFavoritos(favoritosSemProduto)
    } else {
      setFavoritos([...favoritos, produto])
    }
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        {/* Header agora recebe o carrinho do Redux */}
        <Header
          favoritos={favoritos}
          itensNoCarrinho={carrinho}
        />

        {/* Produtos NÃO recebe mais adicionarAoCarrinho */}
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritar}
        />
      </div>
    </>
  )
}

export default App
