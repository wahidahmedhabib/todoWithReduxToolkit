import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, text: "msggg" },
    { id: 2, text: "msg === gg" },
  ],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, actions) => {
      let todo = {
        id: nanoid(),
        text: actions.payload,
      };
      state.todos.push(todo);
    },
    deleteTodo: (state, actions) => {
      state.todos = state.todos.filter(
        (prevTodo) => prevTodo.id != actions.payload
      );
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.map((prevTodo) => {
        return prevTodo.id === action.payload.id
          ? {
              ...prevTodo,
              text: action.payload.editInput,
            }
          : prevTodo;
      });
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
