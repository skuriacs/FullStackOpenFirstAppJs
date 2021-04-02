import React from "react"
const Header = (prop) =>
{
  return (
    <h1>{prop.course}</h1>
  )
}

const Part = (prop) =>
{
  return (
    <p> {prop.name} {prop.num} </p>
  )
}
/*const Content = (prop) => 
{
  return (
    <>
      <Part name={prop.course1name} num={prop.course1num} />
      <Part name={prop.course2name} num={prop.course2num} />
      <Part name={prop.course3name} num={prop.course3num} />
    </>
  )
}*/

const Total = (Num) =>
{
  return (
    <>
      <p>Number of exercises {Num.number}</p>
    </>
  )
}
const App = () =>
{
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of react",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  }
  return (
    <>
      <Header course={course.name} />
      <Part name={course.parts[0].name} num={course.parts[0].exercises} />
      <Part name={course.parts[1].name} num={course.parts[1].exercises} />

      <Part name={course.parts[2].name} num={course.parts[2].exercises} />
      <Total number={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </>
  )
}

export default App