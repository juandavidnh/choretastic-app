import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import ScoreBoardList from '../../components/ScoreboardList/ScoreBoardList'
import TasksNav from '../../components/TasksNav/TasksNav'
import './ScoreboardPage.css'

class ScoreboardPage extends Component {
    static defaultProps = {
        users: [],
        homes: []
    }

    render() {
        const home = this.props.homes.find(home => parseInt(home.id) === parseInt(window.sessionStorage.getItem("homeId")))
        const userList = this.props.users.filter(user => parseInt(user.homeId) === parseInt(home.id))
        console.log(userList)

        return(       
                <main className="scoreBoardPage">
                    <TasksNav path={this.props.match.path}/>
                    <Header headerContent="Family Scoreboard"/>
                    <ScoreBoardList users={userList} />           
                </main>
        )
    }
}

export default ScoreboardPage