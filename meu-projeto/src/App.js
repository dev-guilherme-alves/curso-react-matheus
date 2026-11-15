import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './pages/home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/footer'

function App() {

  return (
    <Route>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/empresa'>
          <Empresa />
        </Route>
        <Route path='/contato'>
          <Contato />
        </Route>
      </Switch>
      <Footer />
    </Route>
  )
}

export default App