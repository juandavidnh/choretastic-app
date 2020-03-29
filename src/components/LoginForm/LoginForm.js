import React, { Component } from 'react'
import './LoginForm.css'
import { Link, withRouter } from 'react-router-dom'

class LoginForm extends Component {
    static defaultProps = {
        loginFunction: () => {},   
    }

    handleSubmit = ev => {
        try{
            ev.preventDefault()

            const { email, password } = ev.target

            this.props.loginFunction(email.value, password.value)
            this.props.history.push('/task-list-own')
        } catch(error) {
            alert(error)
        }

    }

    render() {
        return(
            <form
                onSubmit = {this.handleSubmit}
                className = "loginForm"
            >
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" /><br/><br/>
                <p><Link to="/signup">I don't have an account yet.</Link></p>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default withRouter(LoginForm)
