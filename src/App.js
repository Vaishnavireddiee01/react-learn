import React, { Component} from 'react';


import './App.css';
import Greet from './Component/Greet'
import Welcome from './Component/Welcome'
class App extends Component {
  render() {
    return(
      <div className="App">
        <Greet />
        <Welcome />
      </div>
    )
  }
}

export default App;
