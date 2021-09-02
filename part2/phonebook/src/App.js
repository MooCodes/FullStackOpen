import React, { useState } from 'react'

const Person = ( {person} ) => {
  return (
    <div>
      {person.name} {person.number}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const [filterInput, setFilterInput] = useState('')

  const onNameChange = (e) =>
    setNewName(e.target.value)

  const onNumberChange = (e) =>
    setNewNumber(e.target.value)

  const onFilterChange = (e) =>
    setFilterInput(e.target.value)

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
      setPersons(persons.concat({ id: persons.length + 1, name: newName, number: newNumber }))
    else
      window.alert(`${newName} has already been added to the phonebook.`)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={onFilterChange} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={onNewPerson}>
        <div>
          name: <input onChange={onNameChange} />
        </div>
        <div>
          number: <input onChange={onNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.filter(p => p.name.includes(filterInput)).map(person => <Person key={person.id} person={person}/>)
      }
    </div>
  )
}

export default App