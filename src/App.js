import React, { useState } from "react"
const Display = ({ counter }) => <div>{counter}</div>
const Button = ({ onTouch, text }) =>
{
  return (
    <button onClick={onTouch}>
      {text}
    </button>
  )
}
const App = () =>
{
  const [counter, setCounter] = useState(0)
  const handleClick = () => setCounter(counter + 1)
  const resetClick = () => setCounter(0)
  const decreaseClick = () => setCounter(counter - 1)
  return (
    <div>
      <Display counter={counter} />
      <Button onTouch={handleClick} text={"Add one!"} />
      <Button onTouch={resetClick} text={"Reset to 0!"} />
      <Button onTouch={decreaseClick} text="Subtract one!" />
    </div>
  )

}

export default App