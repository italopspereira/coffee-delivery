import { TotalPriceContainer } from './styles'

export function TotalPrice() {
  return (
    <TotalPriceContainer>
      <div>
        Total de itens
        <span>R$ 29,70</span>
      </div>
      <div>
        Entrega
        <span> R$ 3,50</span>
      </div>
      <div>
        Total
        <span> R$ 33,20</span>
      </div>
    </TotalPriceContainer>
  )
}
