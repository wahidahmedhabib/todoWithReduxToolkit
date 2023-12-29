
// import AddTodo from '../src/Component/AddTodo/AddTodo'

import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, updateTodo } from './App/todoSlice'
import ListTodo from "./Component/ListTodo/ListTodo";
import { AddTodo } from "./Component/AddTodo/AddTodo";
function App() {
  const allTodos = useSelector(state => state.todos.todos)

  // const dispatch = useDispatch()
  return (

    <>


      <div className="h-10 max-w-2xl  text-center border  sm:bg-red-600  mx-auto ">
        <div className="font-bold text-[25px] text-white">Todo App</div>
      </div>
      <div className="max-w-2xl flex items-center justify-center border mx-auto  ">

        <AddTodo />
      </div>
      <div
        className=" w-full max-w-2xl flex  flex-col  border mx-auto p-3 "
      >
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