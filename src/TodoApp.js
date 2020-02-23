import React from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

import { TodosProvider } from './context/todos.context';

import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core';

const TodoApp = () => {
  return (
    <Paper style={{padding: 0, margin: 0, height: '100vh', backgroundColor: '#FAFAFA' }} elevation={0}>
      <AppBar color='primary' position='static' style={{ height: '64px' }}>
        <Toolbar>
          <Typography color='inherit'>Todos with Hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify='center' style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp;