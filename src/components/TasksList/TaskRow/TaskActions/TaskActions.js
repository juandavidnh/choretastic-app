import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './TaskActions.css'

class TaskActions extends Component {
    static defaultProps = {
        task: {},
        deleteTaskFunction: () => {}
    }

    handleDelete = ev => {
        ev.preventDefault()
        console.log("handled delete")

        const taskId = this.props.task.id
        console.log(taskId)

        this.props.deleteTaskFunction(taskId)
    }

    render() {
        return(
            <div className = "taskActions">
                <ul>
                    <li><button type="button">Done</button></li>
                    <li><p><Link to={`/assign-task/`+this.props.task.id}>Assign</Link></p></li>
                    <li><button type="button" onClick={this.handleDelete}>Delete</button></li>
                </ul>
            </div>
        )
    }
}

export default TaskActions