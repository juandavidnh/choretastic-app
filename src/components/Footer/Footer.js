import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
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
                        <li><a href="https://juandavidnh.github.io/my-portfolio/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faAddressCard}/> Portfolio</a></li>
                        <li><a href="https://github.com/juandavidnh" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/> GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/juandavidnh/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/> LinkedIn</a></li>
                    </ul>
                </div>
            </footer>
        )
    }
}

export default Footer
