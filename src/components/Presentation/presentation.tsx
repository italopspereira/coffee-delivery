import { IoIosCart } from 'react-icons/io'
import { BiPackage, BiCoffee } from 'react-icons/bi'
import { MdOutlineTimer } from 'react-icons/md'
import PresentationImage from '../../assets/Imagem.png'
import { PresentationContainer, Benefits } from '../Presentation/styles'
export function Presentation() {
  return (
    <PresentationContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <Benefits>
          <div>
            <IoIosCart />
            <span>Compra simples e segura</span>
          </div>
          <div>
            <BiPackage />
            <span>Embalagem mantém o café intacto</span>
          </div>
          <div>
            <MdOutlineTimer />
            <span>Entrega rápida e rastreada</span>
          </div>
          <div>
            <BiCoffee />
            <span>O café chega fresquinho até você</span>
          </div>
        </Benefits>
      </div>
      <section>
        <img src={PresentationImage} alt="" />
      </section>
    </PresentationContainer>
  )
}
