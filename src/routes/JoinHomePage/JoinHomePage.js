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
                <section className="join-home">
                    <h2>Join Home</h2>
                    <p>Current home members must provide a home name and password.</p>
                    <p>You can also create a new home.</p>
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