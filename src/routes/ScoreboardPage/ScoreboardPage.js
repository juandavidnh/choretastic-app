import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ScoreBoardList from '../../components/ScoreboardList/ScoreBoardList'
import TasksNav from '../../components/TasksNav/TasksNav'
import UserApiService from '../../services/user-api-service'
import './ScoreboardPage.css'

class ScoreboardPage extends Component {
    state = {
        users: []
    }

    componentDidMount(){
        UserApiService.getUsers() 
            .then(users => {
                this.setState({
                    users: users
                })
            })
            .catch(res => alert(res.error))
    }

    render() {

        return(       
                <main className="scoreBoardPage">
                    
                    <TasksNav path={this.props.match.path}/>
                    <h2>Scoreboard</h2>
                    <ScoreBoardList users={this.state.users} /> 
                    <div className="addFamilyMember"><p className="addMember"><Link to="/add-family-member">Add Family Member</Link></p></div>         
                </main>
        )
    }
}

export default ScoreboardPage