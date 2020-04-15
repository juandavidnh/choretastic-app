import React, { Component } from 'react'
import Header from '../../../components/Header/Header'
import TasksList from '../../../components/TasksList/TasksList'
import TasksNav from '../../../components/TasksNav/TasksNav'
import TaskApiService from '../../../services/task-api-service'
import UserApiService from '../../../services/user-api-service'
import ErrorBoundary from '../../../errorHandling/ErrorBoundary'
import './MyTasks.css'

class MyTasks extends Component {
    state = {
        tasks: [],
        users: []   
    }

    static defaultProps = {
        deleteTaskFunction: () => {},
        checkOffFunction: () => {}
    }

    

    componentDidMount(){
        TaskApiService.getOwnTasks() 
            .then(tasks => {
                this.setState({
                    tasks: tasks
                })
            })
            .catch(res => alert(res.error))

        UserApiService.getUsers() 
            .then(users => {
                this.setState({
                    users: users
                })
            })
            .catch(res => alert(res.error))
    }

    taskDone = (taskId) => {
        const tasks = this.state.tasks
        const task = tasks.find(task => parseInt(task.id) === parseInt(taskId))
        const taskIndex = tasks.indexOf(task)
        task.status = "complete"
        tasks.splice(taskIndex, 1, task)

        this.setState({
            tasks
        })

    }

    render() {

        return(
                <main>
                    <TasksNav path={this.props.match.path}/>
                    <Header headerContent="Chore List" />
                    <ErrorBoundary>
                    { (this.state.tasks.length >= 1 && this.state.users.length >= 1) 
                        ? <TasksList users={this.state.users} tasks={this.state.tasks} deleteTaskFunction={this.props.deleteTaskFunction} checkOffFunction={this.props.checkOffTaskFunction} taskDone={this.taskDone} />   
                        : null        
                    }
                    </ErrorBoundary>
                </main>
       )
    }
}

export default MyTasks