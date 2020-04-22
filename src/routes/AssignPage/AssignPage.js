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
        //fill state with home's tasks
        TaskApiService.getTasks() 
            .then(tasks => {
                this.setState({
                    tasks: tasks
                })
            })
            .catch(res => alert(res.error))

        //fill state with users that belong to logged in user's home
        UserApiService.getUsers() 
            .then(users => {
                this.setState({
                    users: users
                })
            })
            .catch(res => alert(res.error))
    }

    render() {
        //detect task clicked
        const taskItem = this.state.tasks.find(task => parseInt(task.id) === parseInt(this.props.match.params.taskId))

        return(
            <main>
                <section className="assign-task-page">
                    <h2>Assign Task</h2>
                    {/*users will be passed down in order to render user first names within assign task form*/}
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