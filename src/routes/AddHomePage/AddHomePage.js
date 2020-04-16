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
                    <AddHomeForm
                        addHomeFunction={this.props.addHomeFunction} 
                    />
                </section>
            </main>
                
        )
    }
}

export default AddHomePage