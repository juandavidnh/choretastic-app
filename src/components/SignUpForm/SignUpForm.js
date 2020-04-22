import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import ValidationError from '../../errorHandling/ValidationError'
import './SignUpForm.css'


class SignUpForm extends Component {
    //set state for live field validation
    state = {
        firstName: {
            value: "",
            touched: false
        },
        lastName: {
            value: "",
            touched: false
        },
        email: {
            value: "",
            touched: false
        },
        nickname: {
            value: "",
            touched: false
        },
        password: {
            value: "",
            touched: false
        },
        repeatPassword: {
            value: "",
            touched: false
        }
    }

    static defaultProps = {
        signUpFunction: () => {},   
    }

    //group of functions that will update state as user fills in form
    updateFirstName(firstName){
        this.setState({ firstName: { value: firstName, touched: true } })
    }

    updateLastName(lastName){
        this.setState({ lastName: { value: lastName, touched: true } })
    }

    updateNickname(nickname){
        this.setState({ nickname: { value: nickname, touched: true } })
    }

    updateEmail(email){
        this.setState({ email: { value: email, touched: true } })
    }

    updatePassword(password){
        this.setState({ password: { value: password, touched: true } })
    }

    updateRepeatPassword(repeatPassword){
        this.setState({ repeatPassword: { value: repeatPassword, touched: true } })
    }

    //extract values from form fields and pass them down to signUpFunction
    handleSubmit = ev => {
            ev.preventDefault()

            const { email, password, repeatPassword, firstName, lastName, nickname } = this.state
            const emailVal = email.value
            const passwordVal = password.value
            const repeatPasswordVal = repeatPassword.value
            const firstNameVal = firstName.value
            const lastNameVal = lastName.value
            const nicknameVal = nickname.value
        
            this.props.signUpFunction(emailVal, passwordVal, repeatPasswordVal, firstNameVal, lastNameVal, nicknameVal)
    }

    //validation functions
    validateFirstName() {
        const firstName = this.state.firstName.value.trim();
        if(firstName.length === 0) {
            return "First name is required"
        } 
    }

    validateLastName() {
        const lastName = this.state.lastName.value.trim();
        if(lastName.length === 0) {
            return "Last name is required"
        } 
    }

    validateEmail() {
        const email = this.state.email.value.trim();
        if(email.length === 0) {
            return "Email is required"
        } else if (!email.match(/^([a-zA-Z0-9_]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)){
            return "Must be a valid email"
        }
    }

    validatePassword() {
        const password = this.state.password.value.trim()
        if(password.length === 0) {
            return "Password is required"
        } else if (password.length < 8 || password.length > 72) {
            return "Password must be between 8 and 72 characters long"
        } else if (!password.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])[\S]+/)) {
            return "Password must contain at least one lowercase letter, one uppercase letter, and one number"
        }
    }

    validateRepeatPassword() {
        const repeatPassword = this.state.repeatPassword.value.trim();
        const password = this.state.password.value.trim();
        if (repeatPassword !== password) {
          return "Passwords do not match";
        }
     }

    render() {
        const firstNameError = this.validateFirstName()
        const lastNameError = this.validateLastName()
        const emailError = this.validateEmail()
        const passwordError = this.validatePassword()
        const repeatPasswordError = this.validateRepeatPassword() 

        return(
            <form
                onSubmit = {this.handleSubmit}
                className = "signUpForm"
            >
                <div className="form-row">
                    <div>
                        <label htmlFor="firstName">First Name:*</label>
                        <br /><input 
                            type="text" 
                            name="firstName" 
                            id="first-name" 
                            onChange={e => this.updateFirstName(e.target.value)}
                            required />
                        <br />{this.state.firstName.touched && <ValidationError message={firstNameError}/>}<br />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name:*</label>
                        <br /><input 
                            type="text" 
                            name="lastName" 
                            id="last-name"
                            onChange={e => this.updateLastName(e.target.value)}
                            required />
                        <br />{this.state.lastName.touched && <ValidationError message={lastNameError}/>}<br />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label htmlFor="nickname">Nickname:</label>
                        <br /><input 
                            type="text" 
                            name="nickname" 
                            id="nickname" 
                            onChange={e => this.updateNickname(e.target.value)}/>
                        <br /><br />
                    </div>
                    <div>
                        <label htmlFor="email">Email:*</label>
                        <br /><input 
                            type="email" 
                            name="email" 
                            id="email" 
                            onChange={e => this.updateEmail(e.target.value)}
                            required />
                        <br />{this.state.email.touched && <ValidationError message={emailError}/>}<br />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label htmlFor="password">Password:*</label>
                        <br /><input 
                            type="password" 
                            name="password" 
                            id="password"
                            onChange={e => this.updatePassword(e.target.value)} 
                            required />
                        <br />{this.state.password.touched && <ValidationError message={passwordError}/>}<br />
                    </div>
                    <div>
                        <label htmlFor="repeatPassword">Repeat password:*</label>
                        <br /><input 
                            type="password" 
                            name="repeatPassword" 
                            id="repeat-password" 
                            onChange={e => this.updateRepeatPassword(e.target.value)} 
                            required />
                        <br />{this.state.repeatPassword.touched && <ValidationError message={repeatPasswordError}/>}<br />
                    </div>
                </div>
                
                <button 
                    type="submit"
                    disabled={this.validateFirstName() || this.validateLastName() || this.validatePassword() || this.validateEmail() || this.validateRepeatPassword()}
                >Next</button>
                <p><Link to="/login">I have an account already</Link></p>
            </form>
        )
    }
}

export default withRouter(SignUpForm)
