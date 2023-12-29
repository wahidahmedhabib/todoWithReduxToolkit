
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
        console.log(id, text )
        setIsEdit(prev => prev = !prev)
        dispatch(updateTodo({ id, editInput }))
    }
    return (
        <div>
            <div className='li' key={todo.id}>
                {isEdit ?
                    <>
                        <div>
                            {todo.text}
                        </div>
                        <div>
                            <button onClick={() => dispatch(deleteTodo(todo.id))} >del</button>
                            <button onClick={() => edit(todo.text)}>edt</button>
                        </div>
                    </>
                    :
                    <>
                        <input type="text" onChange={e => seteditInput(e.target.value)} defaultValue={editInput} />
                        <button onClick={() => updated(todo.id, editInput)} >updated</button>
                    </>
                }



            </div>
        </div>
    )
}

export default ListTodo