import React, { Component } from 'react'
import { v4 as uuid } from 'uuid'

class NewTodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = { task: '' }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    handleSubmit(evt) {
        evt.preventDefault()
        this.props.add({ ...this.state, id: uuid(), completed: false })
        this.setState({ task: '' })
    }


    render() {
        return (
            <div>
                <label class="form__label" for="todo">~ Today I need to ~</label>
                <form onSubmit={this.handleSubmit}>
                    <input className="form__input"
                        type="text"
                        placeholder="New Task"
                        name="task"
                        id="task"
                        value={this.state.task}
                        onChange={this.handleChange} />
                    <button className="button"><span>Add</span></button>
                </form>
            </div>
        )
    }
}

export default NewTodoForm;
