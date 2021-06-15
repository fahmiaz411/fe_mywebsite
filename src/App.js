import 'bootstrap/dist/css/bootstrap.min.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import PrivateRoute from './Components/PrivateRoute'
import Navigasibar from './Components/Navigasibar'

import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Profile from './Pages/Profile'
import Class from './Pages/Hook/Class'
import Function from './Pages/Hook/Function'


function App() {
  return (
    <Router>
        <Navigasibar />

        <Switch>

          <Route exact path="/">
            <Home />  
          </Route>

          <Route exact path="/about">
            <About />  
          </Route>

          <Route path="/hook-class" component={Class} />

          <Route path="/hook-function" component={Function} />

          <PrivateRoute exact path="/product" component={Product} />

          <PrivateRoute path="/profile" component={Profile} />

        </Switch>
    </Router>
  )
}

export default App
