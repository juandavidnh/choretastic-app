import React, { Component } from 'react'
import ScoreBoardItem from './ScoreBoardItem/ScoreBoardItem'
import './ScoreBoardList.css'

class ScoreBoardList extends Component {
    static defaultProps = {
        users: [],
    }

    render() {
        
        const usersSort = this.props.users.sort((a,b) => b.points - a.points)
        const usersList = usersSort.map((user, index) => 
            <ScoreBoardItem key={index} position={index + 1} user={user.name} score={user.points} />
        )

        return(
            <section className = "scoreBoardList">
                <section className="top">
                    <div className="position">Position</div>
                    <div className="user">User</div>
                    <div className="score">Score</div>
                </section>
                {usersList}
            </section>
        )
    }
}

export default ScoreBoardList