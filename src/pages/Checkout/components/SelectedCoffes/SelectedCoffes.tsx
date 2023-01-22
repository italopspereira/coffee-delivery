import { BiTrash } from 'react-icons/bi'
import { CoffeeQuantity } from '../../../../components/CoffeeQuantity/coffeeQuantity'
import { Coffes, HrCoffeeDivider } from './styled'
import CoffeImage from '../../../../assets/Coffee.svg'
export function SelectedCoffes() {
  return (
    <>
      <Coffes>
        <div>
          <img src={CoffeImage} alt="" />
          <div>
            <section>
              <span>Expresso Tradicional</span>
            </section>
            <section>
              <CoffeeQuantity></CoffeeQuantity>
              <button>
                <BiTrash />
                Remover
              </button>
            </section>
          </div>
        </div>
        <span>R$ 9,90</span>
      </Coffes>
      <HrCoffeeDivider></HrCoffeeDivider>
    </>
  )
}
