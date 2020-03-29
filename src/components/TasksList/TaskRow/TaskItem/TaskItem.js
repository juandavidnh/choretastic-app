import React, { Component } from 'react'
import './TaskItem.css'

class TaskItem extends Component {
    static defaultProps = {
        users: [],
        task: {},
        checkOffTaskFunction: () => {}
    }

    handleCheckOff = ev => {
        ev.preventDefault()

        const taskId = this.props.task.id

        this.props.checkOffTaskFunction(taskId)
    }

    render() {
        let assignee

        if(Array.isArray(this.props.users)){
            assignee = this.props.users.find(user => parseInt(user.id) === parseInt(this.props.task.assigneeId))
        }else{
            assignee = this.props.users
        }
        
        return(
            <div className = "taskItem" onClick = {this.handleCheckOff}>
                <h3 className="taskName">{this.props.task.taskName}</h3>
                <ul>
                    
                        <li className="assignee">{assignee.name}</li>
                        <li className="points">{this.props.task.points} points</li>
                </ul>
            </div>
        )
    }
}

export default TaskItem