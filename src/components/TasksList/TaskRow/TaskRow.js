import React, { Component } from 'react'
import TaskActions from './TaskActions/TaskActions'
import TaskItem from './TaskItem/TaskItem'
import './TaskRow.css'

class TaskRow extends Component {
    static defaultProps = {
        users: [],
        task: {},
        checkOffTaskFunction: () => {},
        deleteTaskFunction: () => {},
        taskDone: () => {}
    }

    render() {

        return(
            <section className="task-row">
                <TaskItem 
                    users={this.props.users} 
                    task={this.props.task}
                    
                />
                <TaskActions 
                    task={this.props.task}
                    deleteTaskFunction={this.props.deleteTaskFunction}
                    checkOffTaskFunction={this.props.checkOffTaskFunction}
                    taskDone={this.props.taskDone}
                />
            </section>
        )
    }
}

export default TaskRow