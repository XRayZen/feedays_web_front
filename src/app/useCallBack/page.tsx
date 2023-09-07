"use client";
import { useState, useCallback } from 'react'

type Props = {
  initialCount: number
}

const UseCallBackCounter = ({ initialCount }: Props) => {
  // initialCount = 0
  const [count, setCount] = useState(initialCount)

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1)
  }, [])

  return (
    <div>
      <h2 className="font-bold text-lg mt-4">Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default UseCallBackCounter