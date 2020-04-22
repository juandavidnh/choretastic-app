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
            <p>To Access demo account user these Log In credentials</p>
            <p>Email: jd@choretastic.com</p>
            <p>Password: jd-choretastic</p>
            </section>
            </>
        )
    }
}

export default Header