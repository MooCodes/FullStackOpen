import React, { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Stats = ( {good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / (total)
  const posFeedbackPercentage = total === 0 ? 0 : (good / total) * 100

  return (
    <div>
      good {good}<br></br>
      neutral {neutral}<br></br>
      bad {bad}<br></br>
      all {total}<br></br>
      average {average}<br></br>
      positive {posFeedbackPercentage} %
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <Header text='give feedback' />
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <Header text='statistics' />
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App