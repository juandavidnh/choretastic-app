import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './TaskActions.css'

class TaskActions extends Component {
    static defaultProps = {
        task: {},
        deleteTaskFunction: () => {},
        checkOffTaskFunction: () => {},
        taskDone: () => {}, 
        taskDelete: () => {}
    }

    handleDelete = ev => {
        ev.preventDefault()

        const taskId = this.props.task.id

        this.props.deleteTaskFunction(taskId)

        this.props.taskDelete(taskId)
    }

    handleCheckOff = ev => {
        ev.preventDefault()

        const taskId = this.props.task.id

        this.props.checkOffTaskFunction(taskId)

        this.props.taskDone(taskId)
    }

    render() {
        return(
            <div className = "taskActions">
                    <button className="done" type="button" onClick={this.handleCheckOff}>Done</button>
                    <p className="assign"><Link to={`/assign-task/`+this.props.task.id}>Assign</Link></p>
                    <button className="delete" type="button" onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}

export default TaskActions