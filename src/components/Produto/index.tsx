  import * as S from './styles'
  import { Produto as ProdutoType } from '../../types'

  type Props = {
    produto: ProdutoType
    onAddToCart: () => void
  }

  const Produto: React.FC<Props> = ({ produto, onAddToCart }) => {
    return (
      <S.Produto>
        <S.Capa>
          <img src={produto.imagem} alt={produto.nome} />
        </S.Capa>

        <S.Titulo>{produto.nome}</S.Titulo>

        <S.Prices>{paraReal(produto.preco)}</S.Prices>

        <S.BtnComprar onClick={onAddToCart}>
          Adicionar ao carrinho
        </S.BtnComprar>
      </S.Produto>
    )
  }

  function paraReal(valor: number) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  export default Produto
