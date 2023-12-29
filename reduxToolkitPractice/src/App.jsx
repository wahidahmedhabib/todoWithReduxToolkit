
// import AddTodo from '../src/Component/AddTodo/AddTodo'

import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, updateTodo } from './App/todoSlice'
import ListTodo from "./Component/ListTodo/ListTodo";

function App() {
  const [input, setInput] = useState('')


  const allTodos = useSelector(state => state.todos.todos)

  console.log(allTodos)

  const dispatch = useDispatch()
  // console.log(allTodos)

  const addData = () => {
    console.log(input)
    dispatch(addTodo(input))
  }


  return (

    <>
      <div>
        <input type="text" onChange={e => setInput(e.target.value)} />
        <button onClick={() => dispatch(addTodo(input))} >addd</button>
      </div>
      <div>
        {
          allTodos.map((todo) => {
            return (

              < ListTodo todo={todo} key={todo.id} />
            )
          })
        }

      </div>

    </>

  );
}
export default App;