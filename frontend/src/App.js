import './App.css';import Menu from './components/menu'
import NavBar from './components/navBar'
import Generer from './components/generer'
import MenuBetween from './components/menuBetween/AfficherMenu'
import Menue from './components/menu'
import Rechercher from './components/menuBetween'

const test_menuBetween = {
  id : 10,
  date : '2020-11-10',
  date1 : '2020-11-05',
  date2 :'2020-11-20'
}

function App() {
  return (
    <div className="App">
          <NavBar />
          <Rechercher/>
         {/*<MenuBetween date={test_menuBetween.date} id={test_menuBetween.id} date1={test_menuBetween.date1} date2={test_menuBetween.date2} />*/ } 
    </div>
  );
}

export default App;
