const Form = (props) => {
    return (
        <div>
            <form onSubmit={props.onNewPerson}>
                <div>
                    name: <input onChange={props.onNameChange} />
                </div>
                <div>
                    number: <input onChange={props.onNumberChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default Form