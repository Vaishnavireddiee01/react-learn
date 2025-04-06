import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <buttoon onClick={() => props.greetHandler('child')}>Greet parent</buttoon>
    </div>
  )
}

export default ChildComponent

