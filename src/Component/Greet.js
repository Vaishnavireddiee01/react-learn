//functional components

import React from 'react'

// ction Greet(){
//  return(
//      <h1>Hello AVR</h1>
//  )
//

const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name} age:{props.age}</h1>

            {props.children}
        </div>
        
    )
}
export default Greet