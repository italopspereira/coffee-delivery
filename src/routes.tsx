import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom'
import { Header } from './components/Header/header'
import { Home } from './pages/Home/index'
import { Checkout } from './pages/Checkout'

export const Routes = () => {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Switch>
    </Router>
  )
}
