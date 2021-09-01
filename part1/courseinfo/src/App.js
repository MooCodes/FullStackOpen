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
      <Part name={props.partsArray[0].name} exerciseNum={props.partsArray[0].exercises}/>
      <Part name={props.partsArray[1].name} exerciseNum={props.partsArray[1].exercises} />
      <Part name={props.partsArray[2].name} exerciseNum={props.partsArray[2].exercises} />
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
  let part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }

  let part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  let part3 = {
    name: 'State of a component',
    exercises: 14
  }

  let partsArray = [part1, part2, part3]

  return (
    <div>
      <Header courseName={course}/>
      <Content partsArray={partsArray}/>
      <Total arrOfExerciseNums={[part1.exercises, part2.exercises, part3.exercises]}/>
    </div>
  )
}

export default App