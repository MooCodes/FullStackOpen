import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SearchFilter from './components/SearchFilter'
import Form from './components/Form'
import Phonebook from './components/Phonebook'
import personService from './services/persons' 

const App = () => {
  const [persons, setPersons] = useState([])
  
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

    if (!alreadyInPhonebook(newName)) {
      // add person to back-end
      const newPerson = {
        name: newName,
        number: newNumber
      }

      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })

      axios
        .post('http://localhost:3001/persons', newPerson)
        .then(res => {
          setPersons(persons.concat(res.data))
        })
    }
    else
      window.alert(`${newName} has already been added to the phonebook.`)
  }

  useEffect(() => {
    personService
      .getAll()
      .then(initalPersons => {
        setPersons(initalPersons)
      })
  }, [])

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