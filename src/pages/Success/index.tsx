import {
  OrderSuccessAddress,
  OrderSuccessImage,
  SuccessContainer,
  SuccessMessage,
} from './styles'
import SuccessImage from '../../assets/Illustration.svg'
export function SuccessPage() {
  return (
    <SuccessContainer>
      <SuccessMessage>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <OrderSuccessAddress>
          <div></div>
        </OrderSuccessAddress>
      </SuccessMessage>
      <OrderSuccessImage>
        <img src={SuccessImage} alt="" />
      </OrderSuccessImage>
    </SuccessContainer>
  )
}
