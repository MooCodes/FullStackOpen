import React, { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({ text, value }) => {
  if (text === 'positive')
    return (
      <div>
        {text} {value} %
      </div>
    )
    
  return (
    <div>
      {text} {value}
    </div>
  )
}

const Statistics = ({good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = (good - bad) / (total)
  const posFeedbackPercentage = (good / total) * 100

  if (total === 0)
    return <p>No feedback given</p>

  return (
    <div>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={total} />
      <StatisticLine text='average' value={average} />
      <StatisticLine text='positive' value={posFeedbackPercentage} />
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App