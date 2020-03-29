import React, { Component } from 'react'
import './AssignForm.css'

class AssignTaskForm extends Component {
    state = { error: null }

    static defaultProps = {
        assignTaskFunction: () => {},
        users: [],
        task: {}
    }

    handleSubmit = ev => {
        ev.preventDefault()

        const { taskOwner } = ev.target
        const taskId = this.props.task.id

        this.props.assignTaskFunction(taskId, taskOwner)
    }

    render() {
        return(
            <form
                onSubmit = {this.handleSubmit}
                className = "assignTaskForm"
            >
                <label for="taskOwner">Assign task to:</label>
                <select id="task-owner" name="taskOwner">
                    {this.props.users.map((item) =>
                        <option 
                            key={item.id} 
                            value={item.id}
                        >{item.name}</option>)}
                </select>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default AssignTaskForm
