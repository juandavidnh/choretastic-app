import React, { Component } from 'react'
import './LandingBodySection.css'

class LandingBodySection extends Component {

    static defaultProps = {
        rightSection: null,
        leftSection: null
    }
    
    render() {
        return(
            <section id="product-feature" className="main-section">
                <div>
                    {this.props.leftSection}
                </div>
                <div>
                    {this.props.rightSection}
                </div>
            </section>
        )
    }
}

export default LandingBodySection
