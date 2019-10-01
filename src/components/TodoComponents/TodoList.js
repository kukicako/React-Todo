import React from 'react';
import Item from './Todo';
const TodoList = props => {
  return (
    <div>
      {props.todos.map(todo => (
        <Item
          handleToggleComplete={props.handleToggleComplete}
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};
export default TodoList;
