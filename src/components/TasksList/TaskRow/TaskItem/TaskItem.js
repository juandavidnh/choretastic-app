import React, { Component } from 'react'
import './TaskItem.css'

class TaskItem extends Component {
    static defaultProps = {
        users: [],
        task: {},
    }

    render() {
    
        let assignee

        //if only one user pass object directly, else pass array
        if(Array.isArray(this.props.users)){
            assignee = this.props.users.find(user => parseInt(user.id) === parseInt(this.props.task.assignee_id))
        }else{
            assignee = this.props.users
        }

        //add class to task_name so that it's striken-though if task completed
        let status = this.props.task.status === "complete" ? "taskDone" : null
        
        
        return(
            <div className = "taskItem" onClick = {this.handleCheckOff}>
                <h3 className = {'taskName ' + status}>{this.props.task.task_name}</h3>
                <p className="assignee">{assignee.first_name}</p>
                <p className="points">{this.props.task.points} points</p>
            </div>
        )
    }
}

export default TaskItem