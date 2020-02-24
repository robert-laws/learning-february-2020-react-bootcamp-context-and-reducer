import React, { createContext, useReducer } from 'react';
import todoReducer from '../reducers/todo.reducer';

import { initialTodos } from '../data/initialTodos';
// import useTodoState from '../hooks/useTodoState';

export const TodoContext = createContext();

export const TodosProvider = props => {
  // const { todos, addTodo, editTodo, removeTodo, toggleTodo } = useTodoState(initialTodos);
  const [todos, dispatch] = useReducer(todoReducer, initialTodos)

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  )
}