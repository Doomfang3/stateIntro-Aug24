import { useState } from 'react'

const Count = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        count is {count}
      </button>
      {count % 2 === 0 && <p>It is even !</p>}
      {count % 2 !== 0 && <p>It is odd !</p>}
    </>
  )
}

export default Count
