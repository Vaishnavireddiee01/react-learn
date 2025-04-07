import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props){
        super(props)

        this.state={
            name:'AVR'
        }
        console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(Props, State){
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }
  render() {
    console.log('LifecycleB render')
    return (
      <div>
        Lifecycle B
      </div>
    )
  }
}

export default LifecycleB
