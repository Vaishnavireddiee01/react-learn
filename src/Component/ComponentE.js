import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'


class ComponentE extends Component {

    static contextType = UserContext
  render() {
    return (
      <div>
        <div>
            Component E context {this.context}
            <ComponentF />
        </div>
        
      </div>
    )
  }
}



export default ComponentE
