import React, { Component } from 'react'
import TasksList from '../../../components/TasksList/TasksList'
import TasksNav from '../../../components/TasksNav/TasksNav'
import TaskApiService from '../../../services/task-api-service'
import UserApiService from '../../../services/user-api-service'
import ErrorBoundary from '../../../errorHandling/ErrorBoundary'
import AddItem from '../../../components/TasksList/AddItem/AddItem'
import './AllTasks.css'

class AllTasks extends Component {
    state = {
        tasks: [],
        users: []   
    }

    static defaultProps = {
        deleteTaskFunction: () => {},
        checkOffFunction: () => {}
    }

    

    componentDidMount(){
        //fill state with user's own tasks by calling recursive function
        this.getTasks()

        //fill state with users who belong to logged in user's home
        UserApiService.getUsers() 
            .then(users => {
                this.setState({
                    users: users
                })
            })
            .catch(res => alert(res.error))
    }


    //recursive function to avoid server errors
    getTasks = (runs) => {
        if(runs === undefined){
            runs = 0
        } 

        TaskApiService.getTasks() 
            .then(tasks => {
                this.setState({
                    tasks: tasks
                })
            })
            .catch(res => {
                if(runs > 5){
                    alert(res.error)
                } else {
                    this.getTasks(runs + 1)
                }
            })
    }

    taskDone = (taskId) => {
        //apply a strike-through to task that is completed by updating its state
        const tasks = this.state.tasks
        const task = tasks.find(task => parseInt(task.id) === parseInt(taskId))
        const taskIndex = tasks.indexOf(task)
        task.status = "complete"
        tasks.splice(taskIndex, 1, task)

        this.setState({
            tasks
        })

    }

    taskDelete = (taskId) => {
        //delete task from state so that it no longer renders
        const tasks = this.state.tasks
        const task = tasks.find(task => parseInt(task.id) === parseInt(taskId))
        const taskIndex = tasks.indexOf(task)

        tasks.splice(taskIndex, 1)

        this.setState({
            tasks
        })
    }
    


    render() {

        return(
                <main>
                    <TasksNav path={this.props.match.path}/>
                    <h2>Chore List</h2>
                    <ErrorBoundary>
                    { (this.state.tasks.length < 1 || this.state.users.length < 1 || this.state.tasks === "Enter your first task") 
                        ? <> 
                            {/*if no tasks are found render message asking user to add first task*/}
                            <h3 className="addFirstTask">Congratulations! Now, add your first task</h3> 
                            <AddItem /> 
                        </> 
                        : <TasksList users={this.state.users} tasks={this.state.tasks} deleteTaskFunction={this.props.deleteTaskFunction} checkOffFunction={this.props.checkOffTaskFunction} taskDone={this.taskDone} taskDelete={this.taskDelete} />      
                    }
                    </ErrorBoundary>
                </main>
       )
    }

}

export default AllTasks