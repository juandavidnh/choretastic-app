import React, { Component } from 'react'
import AssignTaskForm from '../../components/AssignForm/AssignForm'
import UserApiService from '../../services/user-api-service'
import TaskApiService from '../../services/task-api-service'
import './AssignPage.css'

class AssignPage extends Component {
    static defaultProps = {
        assignTaskFunction: () => {},
    }

    state ={
        users: [],
        tasks: []
    }

    componentDidMount(){
        TaskApiService.getTasks() 
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

    render() {
        const taskItem = this.state.tasks.find(task => parseInt(task.id) === parseInt(this.props.match.params.taskId))
        console.log(taskItem)

        return(
            <main>
                <section className="assign-task-page">
                    <h2>Assign Task</h2>
                    <AssignTaskForm 
                        assignTaskFunction={this.props.assignTaskFunction} 
                        users={this.state.users}
                        task={taskItem}
                    />
                </section>
            </main>
        )
    }
}

export default AssignPage