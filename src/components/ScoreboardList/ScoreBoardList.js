import React, { Component } from 'react'
import ScoreBoardItem from './ScoreBoardItem/ScoreBoardItem'
import './ScoreBoardList.css'

class ScoreBoardList extends Component {
    static defaultProps = {
        users: [],
    }

    render() {
        
        //sort users according to their number of points from highest to lowest
        const usersSort = this.props.users.sort((a,b) => b.points - a.points)

        //pass users to ScoreBoardItem component, each user will render individually
        const usersList = usersSort.map((user, index) => 
            <ScoreBoardItem key={index} position={index + 1} user={user.first_name} score={user.points} />
        )

        return(
            <section className = "scoreBoardList">
                <section className="top">
                    {/*headers for scoreboard*/}
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