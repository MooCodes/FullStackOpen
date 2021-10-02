import personService from './../services/persons'

const Person = ({ person, deletePerson }) => {
    return (
        <div>
            {person.name} {person.number} <button onClick={deletePerson} style={{display: "inline-block"}}>delete</button>
        </div>
    )
}

const Phonebook = ({ persons, setPersons }) => {
    const deletePerson = (person) => {
        if (window.confirm(`Are you sure you want to delete ${person.name} from the phonebook?`))
            personService
                .deletePerson(person.id)
                .then(returnedPersons => {
                    console.log(returnedPersons)
                    setPersons(persons.filter(p => p.id !== person.id))
                })
    }
    return (
        <div>
            {
                persons.map(person => <Person key={person.id} person={person} deletePerson={() => deletePerson(person)} />)
            }
        </div>
    )
}

export default Phonebook