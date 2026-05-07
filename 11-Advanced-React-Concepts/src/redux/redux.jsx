import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counterSlice'

const App = () => {

  const [num, setNum] = useState(5)
  const dispatch = useDispatch()

  const count = useSelector((state) => state.counter.value)

  return (
    <div>
      <h1 className='m-3 text-7xl'>{count}</h1>
      <button className='px-5 py-5 m-3 bg-green-600 rounded-lg cursor-pointer hover:bg-green-500 text-white'
        onClick={() => {
          dispatch(increment())
        }}>Increment</button>

      <button className='px-5 py-5 m-3 bg-red-600 rounded-lg cursor-pointer hover:bg-red-500 text-white'
        onClick={() => {
          dispatch(decrement())
        }}>Decrement</button>

      <input type="number" value={num} placeholder='Enter Number...'
        onChange={(e) => setNum(e.target.value)}
        className='px-5 py-4 m-3 border-2 border-black rounded-lg outline-none' />

      <button className='px-5 py-5 m-3 bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-500 text-white'
        onClick={() => {
          dispatch(incrementByAmount(Number(num)))
        }}>Increase by Amount</button>

    </div>
  )
}

export default App
