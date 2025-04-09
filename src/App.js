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
import './App.css'
import Form from './Component/Form'
import LifecycleA from './Component/LifecycleA'
import FragmentDemo from './Component/FragmentDemo'
import Table from './Component/Table'
import ParentComp from './Component/ParentComp';
import RefsDemo from './Component/RefsDemo';
import FocusInput from './Component/FocusInput'
import FRParentInput from './Component/FRParentInput'

class App extends Component {
  render() {
    return(
      <div className="App">
        <FRParentInput/>

        {/*using refs*/}
        <RefsDemo/>
        {/*using refs with class components*/}
        <FocusInput/>
        {/*working on pure components*/}
        <ParentComp />
      
        {/*using fragments*/}
        <FragmentDemo/>
        <Table/>
        

        {/*using lifecycle methods*/}
        <LifecycleA/>
        {/*Forms*/}

        <Form/>

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
