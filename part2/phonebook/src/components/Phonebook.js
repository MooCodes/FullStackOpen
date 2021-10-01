import personService from './../services/persons'

const Person = ({ person, deletePerson }) => {
    return (
        <div>
            {person.name} {person.number} <button onClick={deletePerson} style={{display: "inline-block"}}>delete</button>
        </div>
    )
}

const Phonebook = ({ persons, setPersons }) => {
    const deletePerson = (id) => {
        if (window.confirm(`Are you sure you want to delete this person from the phonebook?`))
            personService
                .deletePerson(id)
                .then(returnedPersons => {
                    console.log(returnedPersons)
                    setPersons(persons.filter(p => p.id !== id))
                })
    }
    return (
        <div>
            {
                persons.map(person => <Person key={person.id} person={person} deletePerson={() => deletePerson(person.id)} />)
            }
        </div>
    )
}

export default Phonebook