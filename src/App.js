import 'bootstrap/dist/css/bootstrap.min.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { useContext } from 'react'
import { UserContext } from './context/userContext'

import PrivateRoute from './Components/PrivateRoute'
import Navigasibar from './Components/Navigasibar'

import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Profile from './Pages/Profile'
import Class from './Pages/Hook/Class'
import Function from './Pages/Hook/Function'
import CannotAccess from './Pages/CannotAccess'


function App() {

  const [state] = useContext(UserContext)
  console.log(state.isLogin)

  return (

    <Router>
        <Navigasibar />

        <Switch>

          <Route exact path="/">
            {state.isLogin === true ?
            <Home /> : 
            <CannotAccess />
            }
          </Route>

          <Route exact path="/about">
            {state.isLogin === true ?
              <About /> : 
              <CannotAccess />
              }
          </Route>

          <Route path="/hook-class" component={Class} />

          <Route path="/hook-function" component={Function} />
          
          <PrivateRoute exact path="/product" component={state.isLogin ? Product : CannotAccess} />

          <PrivateRoute path="/profile" component={state.isLogin ? Profile : CannotAccess} />

        </Switch>
    </Router>

  )
}

export default App
