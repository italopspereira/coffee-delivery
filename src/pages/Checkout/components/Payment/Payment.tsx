import { AiFillBank, AiOutlineCreditCard } from 'react-icons/ai'
import { BiDollar, BiMoney } from 'react-icons/bi'
import { PaymentMethodButton, PaymentTitle } from './styles'

export function Payment() {
  return (
    <>
      <PaymentTitle>
        <BiDollar size="22" />
        <div>
          <label>Endereço de Entrega</label>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </PaymentTitle>
      <PaymentMethodButton>
        <button>
          <AiOutlineCreditCard />
          Cartão de crédito
        </button>
        <button>
          <AiFillBank />
          cartão de débito
        </button>
        <button>
          <BiMoney />
          dinheiro
        </button>
      </PaymentMethodButton>
    </>
  )
}
