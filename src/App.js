import React, { Component} from 'react';


import './App.css';
import {Greet} from './Component/Greet';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Greet />
      </div>
    )
  }
}

export default App;
