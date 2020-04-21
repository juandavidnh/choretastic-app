import React, { Component } from 'react'
import AddHomeForm from '../../components/AddHomeForm/AddHomeForm'
import './AddHomePage.css'

class AddHomePage extends Component {
    static defaultProps = {
        addHomeFunction: () => {},
    }

    render() {

        return(
            
            <main>
                <section className="add-home">
                    <h2>Add Home</h2>
                    <p className="instructions">Create a new home with a 'home name' and password.</p><p className="instructions">Each new home member will need to enter this when signing up.</p>
                    <AddHomeForm
                        addHomeFunction={this.props.addHomeFunction} 
                    />
                </section>
            </main>
                
        )
    }
}

export default AddHomePage