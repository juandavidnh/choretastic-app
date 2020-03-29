import React, { Component } from 'react'
import './JoinHomeForm.css'
import { withRouter, Link } from 'react-router-dom'

class JoinHomeForm extends Component {
    static defaultProps = {
        joinHomeFunction: () => {},
        user: {},
        homes: []

    }

    handleSubmit = ev => {
        ev.preventDefault()

        const { homeName, password }= ev.target
        const userId = this.props.user.id
        
        this.props.joinHomeFunction(userId, password.value, homeName.value)
        this.props.history.push('/task-list')
    }

    render() {
        return(
            <>
            <form
                onSubmit = {this.handleSubmit}
                className = "joinHomeForm"
            >
                <label htmlFor="homeName">Home Name:</label>
                <input type="text" name="homeName" id="home-name" /><br />
                <label htmlFor="password">Password (current home members should provide you with a home password):</label>
                <input type="password" name="password" id="password" /><br />
                <button type="submit">Submit</button>
            </form>
            <p>-----Or-----</p>
            <p className="button"><Link to='/add-home'>Create a home</Link></p>
            </>
        )
    }
}

export default withRouter(JoinHomeForm)
