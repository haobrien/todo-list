import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
import { v4 as uuid } from 'uuid'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = { todos: [{ task: 'Wash the dog', id: uuid(), completed: false }] }
        this.addTodo = this.addTodo.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        this.editTodo = this.editTodo.bind(this)
        this.markDone = this.markDone.bind(this)
    }

    markDone(taskId) {
        const newTodos = this.state.todos.map(t => {
            if (t.id === taskId) {
                return { ...t, completed: !t.completed }
            }
            return t
        })
        this.setState({ todos: newTodos })
    }

    addTodo(task) {
        this.setState({
            todos: [...this.state.todos, task]
        })
    }

    deleteTodo(taskId) {
        this.setState({
            todos: this.state.todos.filter(task => task.id !== taskId)
        })
    }

    editTodo(taskId, task) {
        const newTodos = this.state.todos.map(t => {
            if (t.id === taskId) {
                return { ...t, task: task }
            }
            return t
        })
        this.setState({ todos: newTodos })
    }

    render() {
        const todoList = this.state.todos.map(todo => {
            return <Todo
                task={todo.task}
                key={todo.id}
                id={todo.id}
                delete={this.deleteTodo}
                edit={this.editTodo}
                completed={todo.completed}
                markDone={this.markDone} />
        })
        return (
            <div className="container">
                <div className="heading">
                    <img class="heading__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg" />
                    <h1 className="heading__title">To-Do List</h1>
                </div>
                <NewTodoForm add={this.addTodo} />
                <ul className="toDoList">
                    {todoList}
                </ul>
            </div>
        )
    }
}

export default TodoList;
