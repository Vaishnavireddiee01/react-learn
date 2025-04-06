import React, { Component} from 'react';


import './App.css';
import Greet from './Component/Greet'
import Welcome from './Component/Welcome'
import Message from './Component/Message'
import Counter from './Component/Counter'
import FunctionClick from './Component/FunctionClick'
import ClassClick from './Component/ClassClick'
class App extends Component {
  render() {
    return(
      <div className="App">
        {/*handle user interaction*/}
        <FunctionClick/>
        <ClassClick/>
        <Counter/>
        {/*using States*/}
        <Message/>
        {/*using props*/}


        <Greet name="AVR" age="20">
          <p> this is children props</p>
        </Greet>
        <Greet name="Sita" age="21">
          <button>Click Me</button>
        </Greet>
        <Welcome name="AVR" age="20"/>
        <Welcome name="Sita" age="21"/>

        
      </div>
    )
  }
}

export default App;
