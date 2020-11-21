import React, { createContext, useContext, useState } from 'react'
import './App.css';
import NavBar from './components/navBar'
import Generer from './components/generer'
import Plats from './components/plats'
import Login from './components/login'
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom'


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
          <Route path="/">
            <Generer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
