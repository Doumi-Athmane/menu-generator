import React, { useState } from 'react'
import './App.css';
import Menu from './components/menu'
import NavBar from './components/navBar'
import Generer from './components/generer'
import Plats from './components/plats'
import Login from './components/login'
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom'
import MenuBetween from './components/menuBetween/AfficherMenu'
import Menue from './components/menue'
import Rechercher from './components/menuBetween'
import Ingredinat from './components/ingrediant'

import axios from 'axios'
import ingrediants from './components/menue/ingrediants';

const api = axios.create({
  baseURL : `http://localhost:3500/api/ingrediant`
})

const test_menuBetween = {
  id : 10,
  date : '2020-11-10',
  date1 : '2020-11-05',
  date2 :'2020-11-20'
}

// <<<<<<< HEAD
// class App extends React.Component  {


//   state = {
//     ingrediants : []
//   }

//   constructor() {
//     super();

//     api.get('/').then (res => {
//       this.setState({ingrediants : res.data })
//       //setIngrediants(res.data)
//     })

//   }

// render(){
// =======

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/plats">
            <Plats />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/menu">
            <Rechercher/>
          </Route>
          <Route path="/ingrediant">
            <Ingredinat ingrediant={ingrediants}/>
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
