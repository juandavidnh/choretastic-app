import React, { Component } from 'react'
import { Link } from'react-router-dom'
import './TasksNav.css'

class TasksNav extends Component {

    render() {

        return(
            <nav className = "taskNav">
                <ul>
                    <li><Link className={this.props.path==='/task-list-own'
                                ? "bold"
                                : null} to="/task-list-own">My tasks</Link></li>
                    <li><Link className={this.props.path==='/task-list'
                                ? "bold"
                                : null} to="/task-list">All tasks</Link></li>
                    <li><Link className={this.props.path==='/score-board'
                                ? "bold"
                                : null} to='/score-board'>Scoreboard</Link></li>
                </ul>
            </nav>
        )
    }
}

export default TasksNav