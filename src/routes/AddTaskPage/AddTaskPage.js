import React, { Component } from 'react'
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm'
import './AddTaskPage.css'

class AddTaskPage extends Component {
    static defaultProps = {
        addTaskFunction: () => {},
        users: [],
        homes: []
    }

    render() {
        const home = this.props.homes.find(home => parseInt(home.id) === parseInt(window.sessionStorage.getItem("homeId")))
        const userList = this.props.users.filter(user => parseInt(user.homeId) === parseInt(home.id))

        return(           
            <main>
                <section className="add-task-page">
                    <h2>Add Task</h2>
                    <AddTaskForm
                        addTaskFunction={this.props.addTaskFunction} 
                        users={userList}
                    />
                </section>
            </main>       
        )
    }
}

export default AddTaskPage