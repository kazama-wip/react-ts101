import React, { useState } from 'react';


const Count = () => {
  const [count, setCount] = useState<number>(0);
  const [message, setmessage] = useState<string>('');
  const handleIncrement = () => {
    setCount(count + 1)
  }
  const handleDecrement = () => {
    setCount(count - 1)
  }
  const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setmessage(e.target.value)
  }
  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleDecrement}>-1</button>
      </div>
      <div>
        <p>{message}  </p>
        <input type="text" value={message} onChange={handleMessage} />
      </div>
    </>
  )
}

export default Count;