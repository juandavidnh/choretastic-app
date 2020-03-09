import React, { Component } from 'react'
import STORE from '../../dummy-store'

class AddHomeForm extends Component {
    state = { error: null }

    handleSubmit = ev => {
        ev.preventDefault()
        const { homeName, password, repeatPassword } = ev.target
        const idNumber = STORE.homes.length + 1

        STORE.homes.push({
            "id": idNumber,
            "home-name": homeName,
            "password": password,
            "repeat-password": repeatPassword,
        })
    }



    render() {
        const { error } = this.state
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