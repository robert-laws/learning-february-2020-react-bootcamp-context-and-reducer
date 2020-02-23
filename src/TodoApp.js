import React from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

import useTodoState from './hooks/useTodoState';

import { initialTodos } from './data/initialTodos';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

const TodoApp = () => {
  const { todos, addTodo, editTodo, removeTodo, toggleTodo } = useTodoState(initialTodos);

  return (
    <Paper style={{padding: 0, margin: 0, height: '100vh', backgroundColor: '#FAFAFA' }} elevation={0}>
      <AppBar color='primary' position='static' style={{ height: '64px' }}>
        <Toolbar>
          <Typography color='inherit'>Todos with Hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify='center' style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp;