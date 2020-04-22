import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import choretasticLogo from '../../media/choretastic-logo.png'
import './Nav.css'

class Nav extends Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }

    //functions will render appropriated buttons depending on the user's logged in status

    renderLogoutLink() {
        return(
            <ul>
                <li className="nav-item"><Link to='/' onClick={this.handleLogoutClick}>Log Out</Link></li>
            </ul>
        )
    }

    renderLoginLink() {
        return(
            <ul>
                <li className="nav-item"><Link to='/signup'>Sign up</Link></li>
                <li className="nav-item"><Link to='/login'>Sign in</Link></li>
            </ul>
        )
    }

    render() {
        return(
            <header>
                <Link to='/'><img src={choretasticLogo} alt="choretastic-logo" className="choretastic-logo"/></Link>
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