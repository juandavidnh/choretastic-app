import React, { Component } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import './SignUpPage.css'

class SignUpPage extends Component {
    static defaultProps = {
        signUpFunction: () => {}
    }

    render() {

        return(
            <main>
                <section className="main-section-w">
                    <h2>Sign Up</h2>
                    <SignUpForm 
                        signUpFunction={this.props.signUpFunction} 
                    />
                </section>
            </main>
        )
    }
}

export default SignUpPage