import React from 'react';
import ListaItem from './ListaItem';

function Lista({ todos, toggleComplete, updateTodo, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <ListaItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default Lista;