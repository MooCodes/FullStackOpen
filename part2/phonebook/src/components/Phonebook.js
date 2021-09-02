const Person = ({ person }) => {
    return (
        <div>
            {person.name} {person.number}
        </div>
    )
}

const Phonebook = (props) => {
    return (
        <div>
            {
                props.persons.map(person => <Person key={person.id} person={person} />)
            }
        </div>
    )
}

export default Phonebook