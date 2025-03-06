import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handledecrement = () => {
        setCount(count - 1);
    }

    const handlereset = () => {
        setCount(0);
    }
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handledecrement}>-</button>
      <button onClick={handlereset}>0</button>
    </div>
  )
}

export default Counter
