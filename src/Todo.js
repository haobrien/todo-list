import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            task: this.props.task
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.toggleForm = this.toggleForm.bind(this)
        this.markDone = this.markDone.bind(this)
    }

    markDone() {
        this.props.markDone(this.props.id)
    }

    toggleForm() {
        this.setState({ isEditing: true })
    }

    handleDelete() {
        this.props.delete(this.props.id)
    }

    handleUpdate(evt) {
        evt.preventDefault()
        this.props.edit(this.props.id, this.state.task)
        this.setState({ isEditing: false })
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <form onSubmit={this.handleUpdate} className="saveForm">
                    <input className="form__input"
                        type="text"
                        name="task"
                        id="task"
                        value={this.state.task}
                        onChange={this.handleChange} />
                    <button className="iconButton"><span className="fa fa-check"></span></button>
                </form>
            )
        } else {
            result = (
                <div>
                    <li className={this.props.completed ? 'complete' : ''}
                        onClick={this.markDone}>
                        {this.props.task}
                    </li>
                    <div className="buttonGroup">
                        <button className="iconButton"
                            onClick={this.toggleForm}><span className="fa fa-edit"></span></button>
                        <button className="iconButton"
                            onClick={this.handleDelete}><span className="fa fa-trash"></span></button>
                    </div>
                </div>
            )
        }
        return result
    }
}

export default Todo;
