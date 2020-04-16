import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import MyTasks from './routes/TasksListPage/MyTasks/MyTasks'
import AllTasks from './routes/TasksListPage/AllTasks/AllTasks'
import AddHomePage from './routes/AddHomePage/AddHomePage'
import AddTaskPage from './routes/AddTaskPage/AddTaskPage'
import AssignPage from './routes/AssignPage/AssignPage'
import JoinHomePage from './routes/JoinHomePage/JoinHomePage'
import LandingPage from './routes/LandingPage/LandingPage'
import LoginPage from './routes/LoginPage/LoginPage'
import ScoreboardPage from './routes/ScoreboardPage/ScoreboardPage'
import SignUpPage from './routes/SignUpPage/SignUpPage'
import AddFamilyMemberPage from './routes/AddFamilyMemberPage/AddFamilyMemberPage'
import PrivateRoute from './components/Utils/PrivateRoute'
import PublicOnlyRoute from './components/Utils/PublicRoute'
import AuthApiService from './services/auth-api-service'
import UserApiService from './services/user-api-service'
import TaskApiService from './services/task-api-service'
import TokenService from './services/token-service'
import { withRouter } from 'react-router'
import './App.css'

class App extends React.Component {

  state = {
    homes: [],
    tasks: [],
    users: [],
    error: null,
    isLoggedIn: false
  }

  addHome = (name, password, repeatPassword) => {
    if (password !== repeatPassword) {
      throw new Error('Password and repeat password do not match')
    }

    AuthApiService.postHome({
      home_name: name,
      password
    })
      .then(home => {
        UserApiService.getMyUser()
          .then(user => {
            UserApiService.insertHome(user.id, home.id)
            this.props.history.push('/task-list')
          })
      })
      .catch(res => alert(res.error))
  }

  addTask = (taskName, points, assigneeId) => {
    TaskApiService.postTask(taskName, assigneeId, points)
      .then(res =>  {
          this.props.history.push("/task-list")
        }
      )
      .catch(res => alert(res.error))
  }

  assignTask = (taskId, assigneeId) => {
    TaskApiService.assignTask(taskId, assigneeId)
      .then(res =>  {
          this.props.history.push("/task-list")
        }
      )
      .catch(res => alert(res.error))
  }

  signUp = (email, password, repeatPassword, name, lastName, nickname) => {
    if (password !== repeatPassword) {
      throw new Error(`Passwords don't match`)
    }

    AuthApiService.postUser({
      email,
      password,
      first_name: name,
      last_name: lastName,
      nickname
    })
      .then(res => {
        TokenService.saveAuthToken(res.authToken)
        this.props.history.push('/join-home')
      })
      .catch(res => alert(res.error))
  }

  addFamilyMember = (email, password, repeatPassword, name, lastName, nickname) => {
    if (password !== repeatPassword) {
      throw new Error(`Passwords don't match`)
    }

    UserApiService.addUser(name, lastName, nickname, email, password)
      .then(res => {
          this.props.history.push('/score-board')
        }
      )
      .catch(res => alert(res.error))

  }

  joinHome = (password, homeName) => {
    AuthApiService.postLoginHome({
      home_name: homeName,
      password
    })
      .then(home => {
        UserApiService.getMyUser()
          .then(user => {
            UserApiService.insertHome(user.id, home.id)
            this.props.history.push('/task-list')
          })
      })
      .catch(res => alert(res.error))

  }

  logIn = (userEmail, password) => {

    AuthApiService.postLoginUser({
      email: userEmail,
      password
    })
      .then(res => {
          TokenService.saveAuthToken(res.authToken)
          this.props.history.push('/task-list-own')
      })
      .catch(res => alert(res.error))
  }
 
  deleteTask = (taskId) => {
    TaskApiService.deleteTask(taskId)
      .catch(res => alert(res.error))
  }

  checkOffTask = (taskId) => {
    TaskApiService.getTask(taskId)
      .then(task => {
        TaskApiService.checkOffTask(task.id)

        return task
      })
      .then(task => {
        UserApiService.getById(task.assignee_id)
          .then(user => {
            const newPoints = user.points + task.points

            UserApiService.addPoints(user.id, newPoints)
          })
      })
      .catch(res => alert(res.error))
  }

  


  render() {
    return(
    <div className="App">
      <Nav />
      <main className="App_main">
        <Switch>
          <Route
            exact
            path={'/'}
            component={(props) => 
              <LandingPage 
                {...props}
              />}
          />
          <PublicOnlyRoute
            path={'/login'}
            component={(props) => 
              <LoginPage 
                {...props}
                loginFunction = {this.logIn}
              />
            }
          />
          <PublicOnlyRoute
            path={'/signup'}
            component={(props) => 
              <SignUpPage 
                {...props}
                signUpFunction = {this.signUp}
              />
            }
          />
          <PrivateRoute
            path={'/score-board'}
            component={(props) => 
              <ScoreboardPage 
                {...props}
              />
            }
          />
          <PrivateRoute
            path={'/join-home'}
            component={(props) => 
              <JoinHomePage 
                {...props}
                joinHomeFunction = {this.joinHome}
              />
            }
          />
          <PrivateRoute
            path={'/assign-task/:taskId'}
            component={(props) => 
              <AssignPage 
                {...props}
                assignTaskFunction = {this.assignTask}
              />
            }
          />
          <PrivateRoute
            path={'/add-task'}
            component={(props) => 
              <AddTaskPage 
                {...props}
                addTaskFunction = {this.addTask}
              />
            }
          />
          <PrivateRoute
            path={'/add-home'}
            component={(props) => 
              <AddHomePage 
                {...props}
                addHomeFunction = {this.addHome}
              />
            }
          />
          <PrivateRoute
            path={'/add-family-member'}
            component={(props) => 
              <AddFamilyMemberPage 
                {...props}
                addFamilyMemberFunction = {this.addFamilyMember}
              />
            }
          />
          <PrivateRoute
            path={'/task-list-own'}
            component={(props) => 
              <MyTasks
                {...props}
                deleteTaskFunction = {this.deleteTask}
                checkOffTaskFunction = {this.checkOffTask}
              />
            }
          />
          <PrivateRoute
            path={'/task-list'}
            component={(props) => 
              <AllTasks
                {...props}
                deleteTaskFunction = {this.deleteTask}
                checkOffTaskFunction = {this.checkOffTask}
              />
            }
          />

        </Switch>
      </main>
      <Footer />
    </div>
    )
  }
}

export default withRouter(App);