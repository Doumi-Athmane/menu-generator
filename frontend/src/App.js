import React from 'react'
import './App.css';
import Menu from './components/menu'
import NavBar from './components/navBar'
import Generer from './components/generer'
import Plats from './components/plats'
import Login from './components/login'
import ProtectedRoute from "./components/protectedRoute"
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom'
import MenuBetween from './components/menuBetween/AfficherMenu'
import Menue from './components/menue'
import Rechercher from './components/menuBetween'
import Ingredinat from './components/ingrediant'

import ingrediants from './components/menue/ingrediants';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <div className="App">
            <NavBar />
            <Switch>
              <ProtectedRoute path="/plats" exact component={Plats} />
              <ProtectedRoute path="/menu" exact component={Rechercher} />
              <ProtectedRoute path="/menuBetween" exact component={MenuBetween} />
              <ProtectedRoute path="/menuJour" exact component={Menue} />
              <ProtectedRoute path="/" exact component={Generer} />
              <ProtectedRoute exact path="/ingrediant">
                <Ingredinat ingrediant={ingrediants}/>
              </ProtectedRoute>
            </Switch>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
