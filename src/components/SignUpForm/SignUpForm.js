import React, { Component } from 'react'
import './SignUpForm.css'
import { withRouter, Link } from 'react-router-dom'

class SignUpForm extends Component {
    static defaultProps = {
        signUpFunction: () => {},   
    }

    handleSubmit = ev => {
        ev.preventDefault()

        const { email, password, repeatPassword, firstName, lastName, nickname } = ev.target
        const emailVal = email.value
        const passwordVal = password.value
        const repeatPasswordVal = repeatPassword.value
        const firstNameVal = firstName.value
        const lastNameVal = lastName.value
        const nicknameVal = nickname.value
        
        this.props.signUpFunction(emailVal, passwordVal, repeatPasswordVal, firstNameVal, lastNameVal, nicknameVal)
        this.props.history.push('/join-home')

    }

    render() {
        return(
            <form
                onSubmit = {this.handleSubmit}
                className = "signUpForm"

            >
                <label htmlFor="firstName">First Name:*</label>
                <input type="text" name="firstName" id="first-name" required /><br /><br />
                <label htmlFor="lastName">Last Name:*</label>
                <input type="text" name="lastName" id="last-name" required /><br /><br />
                <label htmlFor="nickname">Nickname:</label>
                <input type="text" name="nickname" id="nickname" /><br /><br />
                <label htmlFor="email">Email:*</label>
                <input type="email" name="email" id="email" required /><br /><br />
                <label htmlFor="password">Password:*</label>
                <input type="password" name="password" id="password" required /><br /><br />
                <label htmlFor="repeatPassword">Repeat password:*</label>
                <input type="password" name="repeatPassword" id="repeat-password" required /><br /><br />
                
                <p><Link to="/login">I have an account already</Link></p>
                <button type="submit">Next</button>
            </form>
        )
    }
}

export default withRouter(SignUpForm)
