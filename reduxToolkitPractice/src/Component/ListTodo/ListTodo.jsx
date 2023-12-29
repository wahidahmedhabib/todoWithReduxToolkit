
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { addTodo, deleteTodo, updateTodo } from './App/todoSlice'
import { deleteTodo, updateTodo } from '../../App/todoSlice'

const ListTodo = ({ todo }) => {
    const [isEdit, setIsEdit] = useState(true)
    const [editInput, seteditInput] = useState('')


    const dispatch = useDispatch()
    const edit = (val) => {
        setIsEdit(prev => prev = !prev)
        seteditInput(val)
    }
    const updated = (id, text) => {
        setIsEdit(prev => prev = !prev)
        dispatch(updateTodo({ id, editInput }))
    }
    return (
        <div>
            <div className='w-full  min-h-10 border my-1 flex flex-col justify-center ' key={todo.id}>
                {isEdit ?
                    <div
                        className='flex h-full items-center  justify-center px-2'
                    >
                        <div className=' w-[80%]  text-white'>
                            {todo.text}
                        </div>
                        <div className='w-[25%]   '>
                            <button className='bg-red-600 w-[50%]' onClick={() => dispatch(deleteTodo(todo.id))} >del</button>
                            <button className='bg-yellow-600 w-[50%] ' onClick={() => edit(todo.text)}>edt</button>
                        </div>
                    </div>
                    :
                    <div className='border  mx-2 flex  '>
                        <div className='w-[75%] border-red-700 border-2'>

                            <input
                                className='w-full '
                                type="text" onChange={e => seteditInput(e.target.value)} defaultValue={editInput} />
                        </div>
                        <button className='w-[25%] bg-green-500' onClick={() => updated(todo.id, editInput)} >updated</button>
                    </div>
                }

            </div>
        </div>
    )
}

export default ListTodo