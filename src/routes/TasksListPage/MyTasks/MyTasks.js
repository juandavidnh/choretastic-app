import React, { Component } from 'react'
import Header from '../../../components/Header/Header'
import TasksList from '../../../components/TasksList/TasksList'
import TasksNav from '../../../components/TasksNav/TasksNav'
import './MyTasks.css'

class MyTasks extends Component {
    static defaultProps = {
        users: [],
        tasks: [],
        homes: [],
        checkOffTaskFunction: () => {},
        deleteTaskFunction: () => {},
    }

    render() {
        const user = this.props.users.find(user => parseInt(user.id) === parseInt(window.sessionStorage.getItem("userId")))
        const taskArray = this.props.tasks
        let tasks = taskArray.filter(task => parseInt(task.assigneeId) === parseInt(user.id))

        
        
        return(
                <main>
                    <TasksNav path={this.props.match.path}/>
                    <Header headerContent="Chore List" />
                    <TasksList users={user} tasks={tasks} deleteTaskFunction={this.props.deleteTaskFunction} checkOffFunction={this.props.checkOffTaskFunction}/>           
                </main>
       )
    }
}

export default MyTasks