import React, { Component } from 'react'
import AddHomeForm from '../../components/AddHomeForm/AddHomeForm'
import './AddHomePage.css'

class AddHomePage extends Component {
    static defaultProps = {
        addHomeFunction: () => {},
        users: [],
        homes: []
    }

    render() {

        return(
            
            <main>
                <section className="add-home">
                    <h2>Add Home</h2>
                    <AddHomeForm
                        addHomeFunction={this.props.addHomeFunction} 
                        users = {this.props.users}
                        homes = {this.props.homes}
                    />
                </section>
            </main>
                
        )
    }
}

export default AddHomePage