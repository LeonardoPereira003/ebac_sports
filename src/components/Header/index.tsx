  import * as S from './styles'
  import cesta from '../../assets/cesta.png'
  import { Produto } from '../../types'

  type Props = {
    itensNoCarrinho: Produto[]
  }

  const Header: React.FC<Props> = ({ itensNoCarrinho }) => {
    const valorTotal = itensNoCarrinho.reduce(
      (acc, item) => acc + item.preco,
      0
    )

    return (
      <S.Header>
        <h1>EBAC Sports</h1>

        <div>
          <img src={cesta} alt="Carrinho" />
          <span>
            {itensNoCarrinho.length} itens, valor total:{' '}
            {paraReal(valorTotal)}
          </span>
        </div>
      </S.Header>
    )
  }

  function paraReal(valor: number) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  export default Header
