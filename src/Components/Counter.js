import React, { useState } from 'react'

const Counter = () => {


const [count,setCount] = useState(0)



function decrement(){
    if(count===0) return
    else setCount(count-1)
    
}
function increment(){
    setCount(count+1)
}


  return (
    <>
    <h2>Counter Application</h2>
    

    <p>{count}</p>

    <button onClick={decrement}>DECREMENT</button>
    <button onClick={increment}>INCREMENT</button>

    </>
  )
}

export default Counter