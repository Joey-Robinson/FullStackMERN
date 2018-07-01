import React, { Component } from 'react';
import AppNavBar from './Components/NavBar/AppNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ShoppingList from './Components/ShoppingList/ShoppingList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavBar />
        <ShoppingList />
      </div>
    );
  }
}

export default App;
