import React, { createContext } from 'react';
import { initialTodos } from '../data/initialTodos';
import useTodoState from '../hooks/useTodoState';

export const TodoContext = createContext();

export const TodosProvider = props => {
  // const { todos, addTodo, editTodo, removeTodo, toggleTodo } = useTodoState(initialTodos);
  const todoStuff = useTodoState(initialTodos);

  return (
    <TodoContext.Provider value={todoStuff}>
      {props.children}
    </TodoContext.Provider>
  )
}