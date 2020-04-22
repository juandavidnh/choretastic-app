import React, { Component } from 'react'
import './LoginForm.css'
import { Link, withRouter } from 'react-router-dom'

class LoginForm extends Component {
    static defaultProps = {
        loginFunction: () => {},   
    }

    handleSubmit = ev => {
            ev.preventDefault()

            const { email, password } = ev.target

            this.props.loginFunction(
                email.value, 
                password.value
                )
                
        } 

    

    render() {
        return(
            <form
                onSubmit = {this.handleSubmit}
                className = "loginForm"
            >
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" /><br/>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" autoComplete="on"/><br/>
                <button className="loginButton" type='submit'>Submit</button>
                <p><Link to="/signup">I don't have an account yet.</Link></p>
            </form>
        )
    }
}

export default withRouter(LoginForm)
