import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import './Nav.css'

class Nav extends Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }

    renderLogoutLink() {
        return(
            <ul>
                <li><Link to='/' onClick={this.handleLogoutClick}>Log Out</Link></li>
            </ul>
        )
    }

    renderLoginLink() {
        return(
            <ul>
                <li><Link to='/signup'>Sign up</Link></li>
                <li><Link to='/login'>Sign in</Link></li>
            </ul>
        )
    }

    render() {
        return(
            <header>
                <h1><Link to='/'>Choretastic</Link></h1>
                <nav>
                    {TokenService.hasAuthToken()
                        ? this.renderLogoutLink()
                        : this.renderLoginLink()
                    }
                </nav>
            </header>
        )
    }
}

export default Nav