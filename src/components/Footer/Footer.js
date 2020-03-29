import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
    

    render() {
        return(
            <footer>
                <div className="created-by">
                    <p>Created by JD Nunez</p>
                </div>
                <div className="portfolio-links">
                    <ul>
                        <li><a href="https://juandavidnh.github.io/my-portfolio/" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
                        <li><a href="https://github.com/juandavidnh" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/juandavidnh/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    </ul>
                </div>
            </footer>
        )
    }
}

export default Footer
