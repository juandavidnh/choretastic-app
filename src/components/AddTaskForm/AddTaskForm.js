import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './AddTaskForm.css'

class AddTaskForm extends Component {
    static defaultProps = {
        addTaskFunction: () => {},
        users: []
    }

    handleSubmit = ev => {
        ev.preventDefault()
        const { taskName, taskValue, taskOwner } = ev.target
        
        this.props.addTaskFunction(taskName.value, taskValue.value, taskOwner.value)

    }

    render() {
        return(
            <form
                onSubmit = {this.handleSubmit}
                className = "addTaskForm"
            >
                <label htmlFor="taskName">Task Name:</label>
                <input type="text" name="taskName" id="task-name" /><br />
                <label htmlFor="taskValue">Number of points (1-10):</label>
                <select id="task-value" name="taskValue">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select><br />
                <label htmlFor="taskOwner">Assignee:</label>
                <select id="task-owner" name="taskOwner">
                    {this.props.users.map((item) =>
                     <option 
                        key={item.id} 
                        value={item.id}
                    >{item.first_name}</option>)}
                </select><br />
                <button className="addTaskButton" type="submit">Submit</button>
        </form>
        )
    }
}

export default withRouter(AddTaskForm)
