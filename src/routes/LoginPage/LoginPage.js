import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginPage.css'

class LoginPage extends Component {
    static defaultProps = {
        loginFunction: () => {}
    }

    render() {

        return(            
                <section className="login">
                    <h2>Log In</h2>
                    <LoginForm 
                        loginFunction={this.props.loginFunction} 
                    />
                </section>
        )
    }
}

export default LoginPage