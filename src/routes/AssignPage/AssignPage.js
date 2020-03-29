import React, { Component } from 'react'
import AssignTaskForm from '../../components/AssignForm/AssignForm'
import './AssignPage.css'

class LoginPage extends Component {
    static defaultProps = {
        assignTaskFunction: () => {},
        users: [],
        task: {}
    }

    render() {

        return(
            <main>
                <section class="main-section-w">
                    <h2>Log In</h2>
                    <AssignTaskForm 
                        assignTaskFunction={this.props.loginFunction} 
                        users={this.props.users}
                        task={this.props.task}
                    />
                </section>
            </main>
        )
    }
}

export default LoginPage