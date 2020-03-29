import React, { Component } from 'react'
import Header from '../../../components/Header/Header'
import TasksList from '../../../components/TasksList/TasksList'
import TasksNav from '../../../components/TasksNav/TasksNav'
import './AllTasks.css'

class AllTasks extends Component {
    static defaultProps = {
        users: [],
        tasks: [],
        homes: [],
        checkOffTaskFunction: () => {},
        deleteTaskFunction: () => {},
    }

    render() {
        const home = this.props.homes.find(home => parseInt(home.id) === parseInt(window.sessionStorage.getItem("homeId")))
        const userList = this.props.users.filter(user => parseInt(user.homeId) === parseInt(home.id))
        const taskArray = this.props.tasks
        let taskList = []
        
        for(let i=0; i<userList.length; i++){
            for(let j=0; j<taskArray.length; j++){
                if(parseInt(userList[i].id)===parseInt(taskArray[j].assigneeId)){
                    taskList.push(taskArray[j])
                }
            }
        }

        return(
                <main>
                    <TasksNav path={this.props.match.path}/>
                    <Header headerContent="Chore List" />
                    <TasksList users={userList} tasks={taskList} checkOffFunction={this.props.checkOffTaskFunction} deleteTaskFunction={this.props.deleteTaskFunction}/>           
                </main>
        )
    }
}

export default AllTasks