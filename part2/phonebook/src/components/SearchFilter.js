const SearchFilter = (props) => {
    return (
        <div>
            filter shown with <input onChange={props.onFilterChange} />
        </div>
    )
}

export default SearchFilter