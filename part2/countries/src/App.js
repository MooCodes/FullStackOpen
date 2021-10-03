import { useState, useEffect } from 'react';

// import SearchField from './components/SearchField'
// import SearchResults from './components/SearchResults';

import axios from 'axios'

const Button = (props) => {
  let country = props.country
  let setSearchTerm = props.setSearchTerm
  const handleClick = (e) => setSearchTerm(country.name)

  return (
    <div>
      <button onClick={handleClick}>show</button>
    </div>
  )
}

const Results = (props) => {
  console.log(props, "props")
  let data = props.results.countryData
  let weatherData = props.results.weatherData
  let setSearchTerm = props.setSearchTerm

  // limit more than 10 results
  if (data.length > 10) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  }
  
  // multiple countries - ten or fewer countries, but more than 1
  if (data.length <= 10 && data.length > 1) { 
    // so just display the names of the countries
    return (
      <div>
        {
          data.map(country => 
            <div key={country.name}>
              {country.name} <Button country={country} setSearchTerm={setSearchTerm}/>
            </div>
          )
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
          data[0].languages.map(lang => <li key={lang.name}>{lang.name}</li>)
        }
      </ul>
      <img src={data[0].flags[1]} height="100px" width="100px" />

      <h2>Weather in {data[0].capital}</h2>
      <p><strong>temperature:</strong> {weatherData.current.temperature} Celcius</p>
      <img src={weatherData.current.weather_icons[0]} />
      <p><strong>wind: </strong>{weatherData.current.wind_speed} mph direction {weatherData.current.wind_dir}</p>
    </div>
  )
}

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState({ countryData: [], weatherData: [] })

  const handleChange = (e) => setSearchTerm(e.target.value)

  // make request after we render
  useEffect(() => {
    // empty searchTerm, so don't make request
    if (searchTerm !== '') {
      // get country data
      axios
        .get(`https://restcountries.com/v2/name/${searchTerm}`)
        .then(countryRes => {
          // got response
          console.log(countryRes.data, 'got country data')

          // get weather data
          axios
            .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${countryRes.data[0].name}`)
            .then(weatherRes => {
              console.log(weatherRes.data, 'weather')
              console.log('setting results!')
              setResults({countryData: countryRes.data, weatherData: weatherRes.data})
          })
      })

    }
  }, [searchTerm]) // run whenever the searchTerm changes


  if (results.countryData.length > 0) {
    return (
      <div>
        find countries <input type="text" onChange={handleChange} />
        <Results results={results} setSearchTerm={setSearchTerm} />
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
