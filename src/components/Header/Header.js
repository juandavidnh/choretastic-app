import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
    static defaultProps = {
        headerContent: null
    }



    render() {
        return(
            <section className = "hero">
                <h2>{this.props.headerContent}</h2>
            </section>
        )
    }
}

export default Header