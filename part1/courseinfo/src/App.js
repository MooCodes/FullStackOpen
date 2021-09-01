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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }

    ]
  }

  return (
    <div>
      <Header courseName={course.name}/>
      <Content partsArray={course.parts}/>
      <Total arrOfExerciseNums={[course.parts[0].exercises, course.parts[1].exercises, course.parts[2].exercises]}/>
    </div>
  )
}

export default App