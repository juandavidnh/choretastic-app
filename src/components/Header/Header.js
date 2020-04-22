import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {

    render() {
        return(
            <>
            <section className = "hero">
                
                <section className = "hero-box">
                    <h2>Gamify the household experience</h2>
                    {!TokenService.hasAuthToken() && <div className="signUpButton"><p className="signup"><Link to="/signup">Sign Up</Link></p></div>}
                </section>
            </section>
            <section className="sub-header">
            <h3>Choretastic motivates you and your family to get things done at home</h3>
            </section>
            </>
        )
    }
}

export default Header