import React from 'react'

function MemoComp({name}) {
    console.log('Memo Component render')
  return (
    <div>
        <h1>Memo Component {name}</h1>
      
    </div>
  )
}

export default MemoComp
