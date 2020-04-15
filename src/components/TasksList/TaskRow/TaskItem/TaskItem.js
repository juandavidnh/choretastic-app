import React, { Component } from 'react'
import './TaskItem.css'

class TaskItem extends Component {
    static defaultProps = {
        users: [],
        task: {},
    }

    render() {
    
        let assignee

        if(Array.isArray(this.props.users)){
            assignee = this.props.users.find(user => parseInt(user.id) === parseInt(this.props.task.assignee_id))
        }else{
            assignee = this.props.users
        }

        let status = this.props.task.status === "complete" ? "taskDone" : null
        
        
        return(
            <div className = "taskItem" onClick = {this.handleCheckOff}>
                <h3 className = {'taskName ' + status}>{this.props.task.task_name}</h3>
                <ul>  
                    <li className="assignee">{assignee.first_name}</li>
                    <li className="points">{this.props.task.points} points</li>
                </ul>
            </div>
        )
    }
}

export default TaskItem