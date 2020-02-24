import React, { useContext} from 'react';

import useInputState from './hooks/useInputState';
import { TodoContext } from './context/todos.context';

import { TextField } from '@material-ui/core';

const EditTodoForm = ({ id, task, toggleEditForm }) => {
  const { dispatch } = useContext(TodoContext);

  const [value, handleChange, reset] = useInputState(task);

  return (
    <form onSubmit={event => {
      event.preventDefault();
      dispatch({ type: "EDIT", id: id, newTask: value })
      reset();
      toggleEditForm();
    }}
    style={{ marginLeft: '1rem', width: '50%' }}>
      <TextField margin='normal' value={value} onChange={handleChange} fullWidth autoFocus />
    </form>
  )
}

export default EditTodoForm;