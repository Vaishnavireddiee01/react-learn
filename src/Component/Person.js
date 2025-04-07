import React from 'react'

function Person({person}) {
  return (
    <div>
        <h2>
            I am {person.name} and I am {person.age} years old. Iam skilled in {person.skill}
        </h2>
      
    </div>
  )
}

export default Person
