import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.courseName}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.exerciseNum}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.partsArray[0].partName} exerciseNum={props.partsArray[0].exerciseNum}/>
      <Part name={props.partsArray[1].partName} exerciseNum={props.partsArray[1].exerciseNum} />
      <Part name={props.partsArray[2].partName} exerciseNum={props.partsArray[2].exerciseNum} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.arrOfExerciseNums.reduce((acc, curr) => acc + curr, 0)}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1Name = 'Fundamentals of React'
  const exercises1 = 10
  const part2Name = 'Using props to pass data'
  const exercises2 = 7
  const part3Name = 'State of a component'
  const exercises3 = 14

  let part1 = {
    partName: part1Name,
    exerciseNum: exercises1
  }

  let part2 = {
    partName: part2Name,
    exerciseNum: exercises2
  }

  let part3 = {
    partName: part3Name,
    exerciseNum: exercises3
  }

  let partsArray = [part1, part2, part3]

  return (
    <div>
      <Header courseName={course}/>
      <Content partsArray={partsArray}/>
      <Total arrOfExerciseNums={[exercises1, exercises2, exercises3]}/>
    </div>
  )
}

export default App