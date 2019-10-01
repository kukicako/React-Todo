import React from 'react';
const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
      />
      <button onClick={props.handleAddTodo}>New Chore</button>
      <button onClick={props.handleClearTodos}>Clear Completed</button>
    </form>
  );
};
export default TodoForm;