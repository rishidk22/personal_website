import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './components/nav'
import router from "./router"

class App extends Component {
  render() {
    return (
      <div>
          {router}
      </div>
    );
  }
}

export default App;
