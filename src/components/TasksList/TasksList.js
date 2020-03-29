import React, { Component } from 'react'
import AddItem from './AddItem/AddItem'
import TaskRow from './TaskRow/TaskRow'
import './TasksList.css'

class TasksList extends Component {
    static defaultProps = {
        users: [],
        tasks: [],
        checkOffFunction: () => {},
        deleteTaskFunction: () => {}
    }

    render() {
        const tasksList = this.props.tasks.map((task, index) => 
            <TaskRow 
                key={index} 
                users={this.props.users} 
                task={task}
                checkOffTaskFunction={this.props.checkOffFunction} 
                deleteTaskFunction={this.props.deleteTaskFunction} 
            />
        )


        return(
            <section className = "tasks">
                <section className = "tasksList">
                    {tasksList}
                </section>
                <AddItem />
            </section>
        )
    }
}

export default TasksList