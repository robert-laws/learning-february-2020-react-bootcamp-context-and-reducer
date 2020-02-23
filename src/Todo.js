import React, { useContext } from 'react';

import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import { TodoContext } from './context/todos.context';

import { ListItem, Checkbox, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons';

const Todo = ({ id, task, completed }) => {
  const { removeTodo, toggleTodo } = useContext(TodoContext);

  const [isEditing, toggle] = useToggleState(false);

  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggleEditForm={toggle} />
      ) : (
        <>
          <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
          <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }}>
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label='Edit' onClick={toggle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  )
}

export default Todo;