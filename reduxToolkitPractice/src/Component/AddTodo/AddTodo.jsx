
// import { useSelector, useDispatch } from "react-redux"
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { addTodo } from '../../App/todoSlice'

export const AddTodo = () => {

  const dispatch = useDispatch()

  const [input, setInput] = useState('')

  const add = () => {
    input ? dispatch(addTodo(input)) : alert("Empty Not Allow")
    setInput('')
  }

  return (
    <div className='w-full max-w-2xl'>
      <div className=' h-14 flex items-center justify-center mobile:max-w-2xl '>
        <div className=' w-[70%] border  '>

          <input
            value={input}
            className="w-full px-2 "
            placeholder="Enter YOur Todo Here"
            type="text" onChange={e => setInput(e.target.value)} />
        </div>

        <button
          className="bg-blue-300 border  w-[25%]"
          onClick={() => add()} >addd
        </button>
      </div>
    </div>
  )

}