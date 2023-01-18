import {
  CheckoutAddress,
  CheckoutCard,
  CheckoutContainer,
  CheckoutInfos,
  CoffeesSelect,
  CoffeesSelectCard,
  PaymentMethod,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutCard>
        <CheckoutInfos>
          <p>Complete seu pedido</p>
          <CheckoutAddress></CheckoutAddress>
          <PaymentMethod></PaymentMethod>
        </CheckoutInfos>
        <CoffeesSelect>
          <p>Cafés selecionados</p>
          <CoffeesSelectCard></CoffeesSelectCard>
        </CoffeesSelect>
      </CheckoutCard>
    </CheckoutContainer>
  )
}
