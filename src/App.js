import React, { Component} from 'react';


import './App.css';
import Greet from './Component/Greet'
import Welcome from './Component/Welcome'
import Message from './Component/Message'
import Counter from './Component/Counter'
import FunctionClick from './Component/FunctionClick'
import ClassClick from './Component/ClassClick'
import EventBind from './Component/EventBind'
import ParentComponent from './Component/ParentComponent'
import UserGreeting from './Component/UserGreeting';
import NameList from './Component/NameList';
import Stylesheet from './Component/Stylesheet';
import Inline from './Component/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'

class App extends Component {
  render() {
    return(
      <div className="App">

        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>

        {/*using stylesheets*/}
        <Stylesheet primary={true}/>
        <Inline/>
        {/*using Lists*/}
        
        <NameList />
        <UserGreeting/>
        <ParentComponent/>
        {/*Binding Events*/}
        <EventBind/>
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
