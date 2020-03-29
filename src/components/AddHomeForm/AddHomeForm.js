import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './AddHomeForm.css'

class AddHomeForm extends Component {

    static defaultProps = {
        addHomeFunction: () => {},
        users: [],
        homes: []
    }

    handleSubmit = ev => {
        ev.preventDefault()
        const { homeName, password, repeatPassword } = ev.target

        const homeNameV = homeName.value
        const passwordV = password.value
        const repeatPasswordV = repeatPassword.value

        const usersArray = this.props.users
        const user = usersArray.find(user => parseInt(user.id) === parseInt(window.sessionStorage.getItem("userId")))

        this.props.addHomeFunction(parseInt(user.id),homeNameV, passwordV, repeatPasswordV)
        this.props.history.push('/task-list')
    }

    render() {
        return(
            <form
                onSubmit = {this.handleSubmit}
                className = 'addHomeForm'
            >
                <label htmlFor="homeName">Home Name:</label>
                <input 
                    type="text" 
                    name="homeName" 
                    id="home-name" 
                /><br />
                <label htmlFor="password">Password (new home members will need to enter this pasword):</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                /><br />
                <label htmlFor="repeatPassword">Repeat password:</label>
                <input 
                    type="password" 
                    name="repeatPassword" 
                    id="repeat-password" 
                /><br />
                <button type="button" onClick = {this.goBack}>Go Back</button>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default withRouter(AddHomeForm)