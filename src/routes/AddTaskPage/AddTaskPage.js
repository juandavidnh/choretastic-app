import React, { Component } from 'react'
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm'
import './AddTaskPage.css'

class AddTaskPage extends Component {
    static defaultProps = {
        addTaskFunction: () => {},
        users: [],
    }

    render() {

        return(
            
            <main>
                <section class="main-section-w">
                    <h2>Add Home</h2>
                    <AddTaskForm
                        addTaskFunction={this.props.addTaskFunction} 
                        users={this.props.users}
                    />
                </section>
            </main>
               
        )
    }
}

export default AddTaskPage