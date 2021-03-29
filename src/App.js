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
const Content = (prop) => 
{
  return (
    <>
      <Part name={prop.course1name} num={prop.course1num} />
      <Part name={prop.course2name} num={prop.course2num} />
      <Part name={prop.course3name} num={prop.course3num} />
    </>
  )
}

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
  const course = "Half Stack application developmenmt"
  const part1 = "Fundamentals of react"
  const exercise1 = 10
  const part2 = "Using props to pass data"
  const exercise2 = 7
  const part3 = "State of a component"
  const exercise3 = 14
  return (
    <>
      <Header course={course} />
      <Content course1name={part1} course2name={part2} course3name={part3} course1num={exercise1} course2num={exercise2} course3num={exercise3} />
      <Total number={exercise1 + exercise2 + exercise3} />
    </>
  )
}

export default App