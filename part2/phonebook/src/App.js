import React, { useState } from 'react'
import SearchFilter from './components/SearchFilter'
import Form from './components/Form'
import Phonebook from './components/Phonebook'

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
      <SearchFilter onFilterChange={onFilterChange}/>
      <h3>add a new</h3>
      <Form 
        onNewPerson={onNewPerson} 
        onNameChange={onNameChange} 
        onNumberChange={onNumberChange} />
      <h3>Numbers</h3>
      <Phonebook persons={persons.filter(p => p.name.includes(filterInput))}/>
    </div>
  )
}

export default App