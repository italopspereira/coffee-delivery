import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Header } from './components/Header/header'
import { Presentation } from './components/Presentation/presentation'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header></Header>
      <Presentation></Presentation>
    </ThemeProvider>
  )
}
