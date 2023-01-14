import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { CoffeeQuantityContainer } from './styles'
export function CoffeeQuantity() {
  return (
    <CoffeeQuantityContainer>
      <button>
        <AiOutlineMinus />
      </button>
      <span>1</span>
      <button>
        <AiOutlinePlus />
      </button>
    </CoffeeQuantityContainer>
  )
}
