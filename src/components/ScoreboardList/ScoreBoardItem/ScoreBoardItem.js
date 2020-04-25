import React, { Component } from 'react'
import './ScoreBoardItem.css'

class ScoreBoardItem extends Component {
    static defaultProps = {
        user: null,
        position: 0,
        score: 0
    }

    render() {
        return(
            <section className = "scoreItem">
                <div className="position">{this.props.position}</div>
                <div className="user">{this.props.user}</div>
                <div className="score">{this.props.score}</div>
            </section>
        )
    }
}

export default ScoreBoardItem