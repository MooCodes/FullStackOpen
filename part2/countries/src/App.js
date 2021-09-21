import { useState, useEffect } from 'react';

// import SearchField from './components/SearchField'
// import SearchResults from './components/SearchResults';

import axios from 'axios'

const Results = ({ data }) => {

  // limit more than 10 results
  if (data.length > 10) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  }
  
  // ten or fewer countries, but more than 1
  if (data.length <= 10 && data.length > 1) { 
    // so just display the names of the countries
    return (
      <div>
        {
          data.map(country => <div key={country.name}>{country.name}</div>)
        }
      </div>
    )
  }

  // just 1 country, so display the info of that country
  return (
    <div>
      <h1>{data[0].name}</h1>
      <p>
        capital {data[0].capital} <br />
        population {data[0].population}
      </p>

      <h2>languages</h2>
      <ul>
        {
          data[0].languages.map(lang => <li>{lang.name}</li>)
        }
      </ul>
      <img src={data[0].flag} height="100px" width="100px" />
    </div>
  )
}

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  const handleChange = (e) => setSearchTerm(e.target.value)

  // make request after we render
  useEffect(() => {
    // empty searchTerm, so don't make request
    if (searchTerm !== '') {
      axios
        .get(`https://restcountries.eu/rest/v2/name/${searchTerm}`)
        .then(res => {
          // got response
          console.log(res.data)

          setResults(res.data)
      })
    }
  }, [searchTerm]) // run whenever the searchTerm changes

  if (results.length > 0) {
    return (
      <div>
        find countries <input type="text" onChange={handleChange} />
        <Results data={results} />
      </div>
    );
  }

  return (
    <div>
      find countries <input type="text" onChange={handleChange} />
    </div>
  );
}

export default App;
