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

  const onNewPerson = (e) => {
    e.preventDefault()

    const alreadyInPhonebook = (name) => {
      let exists = false
      persons.forEach(person => {
        if (person.name === name)
          exists = true
      })
      return exists
    }

    if (!alreadyInPhonebook(newName))
      setPersons(persons.concat({ id: persons.length + 1, name: newName}))
    else
      window.alert(`${newName} has already been added to the phonebook.`)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={onNewPerson}>
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