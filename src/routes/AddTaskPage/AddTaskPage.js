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
        return(           
            <main>
                <section className="add-task-page">
                    <h2>Add Task</h2>
                    {/*users will be passed down in order to render user first names within assign task form*/}
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