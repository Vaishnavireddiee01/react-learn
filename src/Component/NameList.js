import React from 'react'

function NameList() {
    const names=['Bruce', 'Clark', 'Diana']
    const nameList=names.map(name => <h2>name</h2>)
  return (
    <div>
        {
            names.map(name => <h2>{name}</h2>)
        }
        {/*or*/}
        {nameList}
        {/*or*/}
    </div>
  )
}

export default NameList
