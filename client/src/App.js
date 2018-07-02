import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppNavBar from './Components/NavBar/AppNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ShoppingList from './Components/ShoppingList/ShoppingList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavBar />
          <ShoppingList />
        </div>
      </Provider>
    );
  }
}

export default App;