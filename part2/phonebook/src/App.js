import React, { useState } from 'react'

const Person = ( {person} ) => {
  return (
    <div>
      {person.name}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const onNameChange = (e) => {
    setNewName(e.target.value)
  }

  const onButtonPressed = (e) => {
    e.preventDefault()
    setPersons(persons.concat({ id: persons.length + 1, name: newName}))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={onButtonPressed}>
        <div>
          name: <input onChange={onNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(person => <Person key={person.id} person={person}/>)
      }
    </div>
  )
}

export default App