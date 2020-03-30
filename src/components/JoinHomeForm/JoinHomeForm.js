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
        user: {},
        homes: []
    }

    updateHomeName(homeName){
        this.setState({ homeName: { value: homeName, touched: true } })
    }

    updatePassword(password){
        this.setState({ password: { value: password, touched: true } })
    }

    handleSubmit = ev => {
        try{
            ev.preventDefault()

            const { homeName, password }= this.state
            const userId = this.props.user.id
        
            this.props.joinHomeFunction(userId, password.value, homeName.value)
            this.props.history.push('/task-list')
        } catch(error) {
            alert(error)
        }
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
                    <br /><br />
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    onChange={e => this.updatePassword(e.target.value)} />
                    <br /><br />
                <button type="submit">Submit</button>
            </form>
            <p>-----Or-----</p>
            <p className="button"><Link to='/add-home'>Create a home</Link></p>
            </>
        )
    }
}

export default withRouter(JoinHomeForm)
