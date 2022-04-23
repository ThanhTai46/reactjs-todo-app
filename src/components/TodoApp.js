import React, { Fragment, useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import Header from './layout/Header';
import Todos from './Todos';

import axios from 'axios';

import Footer from '../store/containers/Footer';

function TodoApp() {
  const [state, setState] = useState({
    todos: [],
  });
  // state = {
  //   todos: [],
  // };
  const handleCheckboxChange = (id) => {
    setState({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // handle Delete Todo
  const deleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then((response) => {
      console.log(response.data);
      setState({
        todos: [
          ...state.todos.filter((todo) => {
            return todo.id !== id;
          }),
        ],
      });
    });
  };
  // Add Todo
  const addTodo = (title) => {
    const newTodo = {
      title: title,
      completed: false,
    };
    axios.post('https://jsonplaceholder.typicode.com/todos').then((response) => {
      console.log(response.data);
      setState({
        todos: [...state.todos, newTodo],
      });
    });
  };
  // fetch API
  // https://jsonplaceholder.typicode.com/todos

  useEffect(() => {
    const config = {
      params: {
        _limit: 5,
      },
    };
    axios
      .get('https://jsonplaceholder.typicode.com/todos', config)
      .then((response) => setState({ todos: response.data }));
  }, []);

  return (
    <div className="container">
      <Header />
      <AddTodo addTodo={addTodo} />
      <Todos todos={state.todos} handleChange={handleCheckboxChange} deleteTodo={deleteTodo} />
      <Footer />
    </div>
  );
}

export default TodoApp;
