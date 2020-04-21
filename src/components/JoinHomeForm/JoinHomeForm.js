import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import './JoinHomeForm.css'

class JoinHomeForm extends Component {
    state = {
        homeName: {
            value: "",
            touched: false
        },
        password: {
            value: "",
            touched: false
        }
    }

    static defaultProps = {
        joinHomeFunction: () => {},
    }

    updateHomeName(homeName){
        this.setState({ homeName: { value: homeName, touched: true } })
    }

    updatePassword(password){
        this.setState({ password: { value: password, touched: true } })
    }

    handleSubmit = ev => {
            ev.preventDefault()

            const { homeName, password }= this.state
        
            this.props.joinHomeFunction(password.value, homeName.value)
    }

    render() {
        return(
            <>
            <form
                onSubmit = {this.handleSubmit}
                className = "joinHomeForm"
            >
                <label htmlFor="homeName">Home Name:</label>
                <input 
                    type="text" 
                    name="homeName" 
                    id="home-name" 
                    onChange={e => this.updateHomeName(e.target.value)}/>
                    <br />
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    onChange={e => this.updatePassword(e.target.value)} /><br />
                    
                <button className="submitJoinHome" type="submit">Submit</button>
            </form>
            <p className="button"><Link to='/add-home'>You don't want to join a home? Create a new one.</Link></p>
            </>
        )
    }
}

export default withRouter(JoinHomeForm)
