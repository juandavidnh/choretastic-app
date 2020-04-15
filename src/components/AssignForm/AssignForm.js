import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
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
        const newUser = this.props.users.find(user => user.first_name === taskOwner.value)

        this.props.assignTaskFunction(parseInt(taskId), newUser.id)
    }

    render() {
        return(
            <form
                onSubmit = {this.handleSubmit}
                className = "assignTaskForm"
            >
                <label htmlFor="taskOwner">Assign task to:</label>
                <select id="task-owner" name="taskOwner">
                    {this.props.users.map((item) =>
                        <option 
                            key={item.id} 
                        >{item.first_name}</option>)}
                </select>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default withRouter(AssignTaskForm)
