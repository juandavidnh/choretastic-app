import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import ValidationError from '../../errorHandling/ValidationError'
import './AddHomeForm.css'

class AddHomeForm extends Component {
    state = {
        homeName: {
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
        addHomeFunction: () => {},
        users: [],
        homes: []
    }

    updateName(name){
        this.setState({ homeName: { value: name, touched: true } })
    }

    updatePassword(password){
        this.setState({ password: { value: password, touched: true } })
    }

    updateRepeatPassword(repeatPassword){
        this.setState({ repeatPassword: { value: repeatPassword, touched: true } })
    }

    handleSubmit = ev => {
        try{
            ev.preventDefault()
            const { homeName, password, repeatPassword } = this.state

            const homeNameV = homeName.value
            const passwordV = password.value
            const repeatPasswordV = repeatPassword.value

            const usersArray = this.props.users
            const user = usersArray.find(user => parseInt(user.id) === parseInt(window.sessionStorage.getItem("userId")))

            this.props.addHomeFunction(parseInt(user.id),homeNameV, passwordV, repeatPasswordV)
            this.props.history.push('/task-list')
        } catch(error) {
            alert(error)
        }
        
    }

    validateHomeName() {
        const homeName = this.state.homeName.value.trim();
        if(homeName.length === 0) {
            return "Home name is required"
        } else if (homeName.length < 3) {
            return "Home name must be at leat 3 characters long"
        }
    }

    validatePassword() {
        const password = this.state.password.value.trim()
        if(password.length === 0) {
            return "Password is required"
        } else if (password.length < 8 || password.length > 72) {
            return "Password must be between 8 and 72 characters long"
        } else if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)) {
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
        const homeNameError = this.validateHomeName()
        const passwordError = this.validatePassword()
        const repeatPasswordError = this.validateRepeatPassword()

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
                    onChange={e => this.updateName(e.target.value)}
                /><br />{this.state.homeName.touched && <ValidationError message={homeNameError}/>}<br />
                
                <label htmlFor="password">Password (new home members will need to enter this pasword):</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    onChange={e => this.updatePassword(e.target.value)}
                /><br />{this.state.password.touched && <ValidationError message={passwordError}/>}<br />
                
                <label htmlFor="repeatPassword">Repeat password:</label>
                <input 
                    type="password" 
                    name="repeatPassword" 
                    id="repeat-password" 
                    onChange={e => this.updateRepeatPassword(e.target.value)}
                /><br />{this.state.password.touched && <ValidationError message={repeatPasswordError}/>}<br />
        
                <button 
                    type="submit"
                    disabled={this.validateHomeName() || this.validatePassword() || this.validateRepeatPassword()}
                >Submit</button>
            </form>
        )
    }
}

export default withRouter(AddHomeForm)