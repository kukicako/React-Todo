import React from 'react';
const Item = props => {
  return (
    <div
      style={props.todo.completed ? { textDecoration: 'line-through' } : undefined}
      onClick={() => props.handleToggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};
export default Item;
