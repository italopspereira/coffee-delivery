import {
  CheckoutAddress,
  CheckoutCard,
  CheckoutContainer,
  CheckoutInfos,
  CoffeesSelect,
  CoffeesSelectCard,
  PaymentMethod,
  AddressTitle,
  SubmitButton,
} from './styles'
import { TbMapPin } from 'react-icons/tb'
import { Form } from './components/Form/Form'
import { Payment } from './components/Payment/Payment'
import { CoffeeInCart } from './components/SelectedCoffes/CoffeeInCart'
import { TotalPrice } from './components/TotalPrice/TotalPrice'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutCard>
        <CheckoutInfos>
          <p>Complete seu pedido</p>
          <CheckoutAddress>
            <AddressTitle>
              <TbMapPin size="22" />
              <div>
                <label>Endereço de Entrega</label>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </AddressTitle>
            <Form></Form>
          </CheckoutAddress>
          <PaymentMethod>
            <Payment></Payment>
          </PaymentMethod>
        </CheckoutInfos>
        <CoffeesSelect>
          <p>Cafés selecionados</p>
          <CoffeesSelectCard>
            <CoffeeInCart></CoffeeInCart>
            <CoffeeInCart></CoffeeInCart>
            <TotalPrice></TotalPrice>
            <SubmitButton>Confirmar pedido</SubmitButton>
          </CoffeesSelectCard>
        </CoffeesSelect>
      </CheckoutCard>
    </CheckoutContainer>
  )
}
