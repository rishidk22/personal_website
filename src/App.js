import React, { Component } from 'react';
import './App.css';

import Navi from './components/nav'
import Footer from './components/footer'
import router from "./router"

class App extends Component {
  render() {
    return (
      <div>
          <Navi/>
          {router}
      </div>
    );
  }
}

export default App;
