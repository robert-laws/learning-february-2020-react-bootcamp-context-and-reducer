import React, { useContext } from 'react';

import Todo from './Todo'
import { TodoContext } from './context/todos.context';

import { Paper, List, Divider } from '@material-ui/core';

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  if(todos.length) {
    return (
      <Paper>
        <List>
          {todos.map((todo, index) => (
            <React.Fragment key={index}>
              <Todo {...todo} key={todo.id} />
              {index < todos.length -1 && <Divider/> }
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
  } else {
    return null;
  }
}

export default TodoList;