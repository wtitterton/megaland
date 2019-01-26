import React, { Component } from 'react';
import './scss/app.scss';
import Dasboard from './views/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dasboard />
      </div>
    );
  }
}

export default App;
