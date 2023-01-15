import { Presentation } from '../../components/Presentation/presentation'
import { Coffes } from '../../components/Coffes/coffes'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Presentation></Presentation>
      <Coffes></Coffes>
    </HomeContainer>
  )
}
