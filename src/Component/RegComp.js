import React, { Component } from 'react'

export class RegComp extends Component {
  render() {
    console.log("Regular Component render")
    return (
      <div>
        Regular component   {this.props.name}
        
      </div>
    )
  }
}

export default RegComp
