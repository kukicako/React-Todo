import React from 'react'
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      todo: ''
    };
    this.state.todos=JSON.parse(window.localStorage.getItem('state'))
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addTodo = e => {
    e.preventDefault();
    const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
    this.setState({ 
      todos: [...this.state.todos, newTodo], 
      todo: '' 
    });
    window.localStorage.setItem('state', JSON.stringify([...this.state.todos, newTodo]))
  };
  
  changeTodo = e => this.setState({ [e.target.name]: e.target.value });
  
  
  toDoComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
    window.localStorage.setItem('state', JSON.stringify(todos))
  };
  clearTodos = e => {
    e.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos });
    window.localStorage.setItem('state', JSON.stringify(todos))
  };
  render() {
    return (
      <div>
        <h1> ToDo List</h1>
        <TodoList
          handleToggleComplete={this.toDoComplete}
          todos={this.state.todos}
        />
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearTodos={this.clearTodos}
        />
      </div>
    );
  }
}
export default App;
