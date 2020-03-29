import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './TaskActions.css'

class TaskActions extends Component {
    static defaultProps = {
        task: {},
        deleteTaskFunction: () => {},
        checkOffTaskFunction: () => {}
    }

    handleDelete = ev => {
        ev.preventDefault()

        const taskId = this.props.task.id

        this.props.deleteTaskFunction(taskId)
    }

    handleCheckOff = ev => {
        ev.preventDefault()

        const taskId = this.props.task.id

        this.props.checkOffTaskFunction(taskId)
    }

    render() {
        return(
            <div className = "taskActions">
                <ul>
                    <li><button type="button" onClick={this.handleCheckOff}>Done</button></li>
                    <li><p><Link to={`/assign-task/`+this.props.task.id}>Assign</Link></p></li>
                    <li><button type="button" onClick={this.handleDelete}>Delete</button></li>
                </ul>
            </div>
        )
    }
}

export default TaskActions