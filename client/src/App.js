import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Navbar from './components/Navbar'
import RecipesContainer from './components/RecipesContainer'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Route exact path = "/" component={RecipesContainer}/>
        <Route exact path = "/recipes" component={RecipesContainer}/>
      </div>
    );
  }
}

export default App;
