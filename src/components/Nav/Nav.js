import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
    static defaultProps = {
        isLoggedIn: false,
        logOut: () => {}
    }



    render() {
        const isLoggedIn = this.props.isLoggedIn

        return(
            <header>
                <h1><Link to='/'>Choretastic</Link></h1>
                <nav>
                    {isLoggedIn
                        ? <ul>
                            <li><Link to='/' onClick={this.props.logOut}>Log Out</Link></li>
                        </ul>
                        : <ul>
                            <li><Link to='/signup'>Sign up</Link></li>
                            <li><Link to='/login'>Sign in</Link></li>
                        </ul>
                    }
                </nav>
            </header>
        )
    }
}

export default Nav