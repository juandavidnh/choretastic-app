import React, { Component } from 'react'
import './AddHomeForm.css'

class AddHomeForm extends Component {

    static defaultProps = {
        addHomeFunction: () => {}
    }

    handleSubmit = ev => {
        ev.preventDefault()
        const { homeName, password, repeatPassword } = ev.target

        this.props.addHomeFunction(homeName, password, repeatPassword)
    }

    render() {
        return(
            <form
                onSubmit = {this.handleSubmit}
                className = 'addHomeForm'
            >
                <label for="homeName">Home Name:</label>
                <input 
                    type="text" 
                    name="homeName" 
                    id="home-name" 
                /><br />
                <label for="password">Password (new home members will need to enter this pasword):</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                /><br />
                <label for="repeatPassword">Repeat password:</label>
                <input 
                    type="password" 
                    name="repeatPassword" 
                    id="repeat-password" 
                /><br />
                <button type="button" onClick = {this.goBack}>Go Back</button>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default AddHomeForm