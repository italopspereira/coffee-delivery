import {
  CoffeesContainer,
  CoffeesList,
  CoffeeCard,
  CoffeeTag,
  CoffeeDescription,
  CoffeSale,
} from './styles'
import Coffee from '../../assets/Coffee.svg'
import { IoMdCart } from 'react-icons/io'
import { CoffeeQuantity } from '../CoffeeQuantity/coffeeQuantity'
export function Coffes() {
  return (
    <CoffeesContainer>
      <h2>Nossos cafés</h2>
      <CoffeesList>
        <CoffeeCard key="teste">
          <img src={Coffee} alt="" />
          <CoffeeTag>
            <span>Tradicional</span>
          </CoffeeTag>
          <CoffeeDescription>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>
          </CoffeeDescription>
          <CoffeSale>
            <p>
              R$ <span> 9,90</span>
            </p>
            <CoffeeQuantity></CoffeeQuantity>
            <button>
              <IoMdCart />
            </button>
          </CoffeSale>
        </CoffeeCard>
        <CoffeeCard key="tesdddte">
          <img src={Coffee} alt="" />
          <CoffeeTag>
            <span>Tradicional</span>
          </CoffeeTag>
          <CoffeeDescription>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>
          </CoffeeDescription>
          <CoffeSale>
            <p>
              R$ <span> 9,90</span>
            </p>
            <CoffeeQuantity></CoffeeQuantity>
            <button>
              <IoMdCart />
            </button>
          </CoffeSale>
        </CoffeeCard>
      </CoffeesList>
    </CoffeesContainer>
  )
}
