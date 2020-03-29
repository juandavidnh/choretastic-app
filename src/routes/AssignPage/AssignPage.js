import React, { Component } from 'react'
import AssignTaskForm from '../../components/AssignForm/AssignForm'
import './AssignPage.css'

class AssignPage extends Component {
    static defaultProps = {
        assignTaskFunction: () => {},
        users: [],
        tasks: [],
        homes: []
    }

    render() {
        const taskItem = this.props.tasks.find(task => task.id === this.props.match.params.taskId)
        const home = this.props.homes.find(home => parseInt(home.id) === parseInt(window.sessionStorage.getItem("homeId")))
        const userList = this.props.users.filter(user => parseInt(user.homeId) === parseInt(home.id))

        return(
            <main>
                <section className="assign-task-page">
                    <h2>Assign Task</h2>
                    <AssignTaskForm 
                        assignTaskFunction={this.props.assignTaskFunction} 
                        users={userList}
                        task={taskItem}
                    />
                </section>
            </main>
        )
    }
}

export default AssignPage