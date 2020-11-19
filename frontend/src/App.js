import './App.css';import Menu from './components/menu'
import NavBar from './components/navBar'
import Generer from './components/generer'
import Plats from './components/plats'
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom'
import MenuBetween from './components/menuBetween/AfficherMenu'
import Menue from './components/menue'
import Rechercher from './components/menuBetween'
import Ingredinat from './components/ingrediant'

const test_menuBetween = {
  id : 10,
  date : '2020-11-10',
  date1 : '2020-11-05',
  date2 :'2020-11-20'
}

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/plats">
            <Plats />
          </Route>
          <Route path="/menu">
            <Rechercher/>
          </Route>
          <Route path="/ingrediant">
            <Ingredinat/>
          </Route>
          <Route path="/menuBetween">
            <MenuBetween/>
          </Route>
          <Route path="/menuJour">
            <Menue/>
          </Route>
          <Route path="/">
            <Generer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
