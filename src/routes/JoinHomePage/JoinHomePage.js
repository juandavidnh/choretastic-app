import React, { Component } from 'react'
import JoinHomeForm from '../../components/JoinHomeForm/JoinHomeForm'
import './JoinHomePage.css'

class JoinHomePage extends Component {
    static defaultProps = {
        joinHomeFunction: () => {},
    }

    render() {

        return(
                
                <main>
                <section className="join-home">
                    <h2>Join Home</h2>
                    <p className="instructions">Current home members must provide a home name and password.</p>
                    <p className="instructions">You can also create a new home.</p>
                    <JoinHomeForm
                        joinHomeFunction={this.props.joinHomeFunction} 
                    />
                </section>
                </main>
        )
    }
}

export default JoinHomePage