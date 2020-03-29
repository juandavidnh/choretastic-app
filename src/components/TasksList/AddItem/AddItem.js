import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './AddItem.css'

class AddItem extends Component {
    
    render() {
        return(
            <section className = "addItem">
                    <p><Link to="/add-task">Add Task</Link></p>
            </section>
        )
    }
}

export default AddItem