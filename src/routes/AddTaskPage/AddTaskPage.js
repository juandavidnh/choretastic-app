import React, { Component } from 'react'
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm'
import UserApiService from '../../services/user-api-service'
import './AddTaskPage.css'

class AddTaskPage extends Component {
    state ={
        users: [],
    }

    static defaultProps = {
        addTaskFunction: () => {},
    }

    componentDidMount(){
        UserApiService.getUsers() 
            .then(users => {
                this.setState({
                    users: users
                })
            })
            .catch(res => alert(res.error))
    }

    render() {
        return(           
            <main>
                <section className="add-task-page">
                    <h2>Add Task</h2>
                    <AddTaskForm
                        addTaskFunction={this.props.addTaskFunction} 
                        users={this.state.users}
                    />
                </section>
            </main>       
        )
    }
}

export default AddTaskPage