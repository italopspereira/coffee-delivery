import { HeaderContainer } from './styles'
import logo from '../../assets/Logo.svg'
import { GrLocation } from 'react-icons/gr'
import { IoIosCart } from 'react-icons/io'
export function Header() {
  return (
    <HeaderContainer>
      <a href="/">
        <img src={logo} alt="" />
      </a>
      <div>
        <div>
          <GrLocation size={22} />
          <span>São Paulo, SP</span>
        </div>
        <a href="">
          <IoIosCart />
        </a>
      </div>
    </HeaderContainer>
  )
}
