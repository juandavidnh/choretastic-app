import React, { Component } from 'react'
import JoinHomeForm from '../../components/JoinHomeForm/JoinHomeForm'
import './JoinHomePage.css'

class JoinHomePage extends Component {
    static defaultProps = {
        joinHomeFunction: () => {},
        users: [],
        homes: []
    }

    render() {
        const user = this.props.users.find(user => parseInt(user.id) === parseInt(window.sessionStorage.getItem("userId")))

        return(
                
                <main>
                <section className="main-section-w">
                    <h2>Join Home</h2>
                    <JoinHomeForm
                        joinHomeFunction={this.props.joinHomeFunction} 
                        user = {user}
                        homes = {this.props.homes}
                    />
                </section>
                </main>
        )
    }
}

export default JoinHomePage