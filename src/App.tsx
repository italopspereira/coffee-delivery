import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Routes } from './routes'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  )
}
