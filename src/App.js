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

  addHome = (userId, name, password, repeatPassword) => {
    if (password !== repeatPassword) {
      throw new Error('Password and repeat password do not match')
    }

    for(let i = 0; i < this.state.homes.length; i++){
      if(name===this.state.homes[i].homeName){
        throw new Error('Home name already exists, please try a different one')
      }
    }

    const newId = this.state.homes.length + 1
    const newHome = {
      id: newId,
      password: password,
      homeName: name
    }

    const homeArray = this.state.homes
    homeArray.push(newHome)

    const usersArray = this.state.users
    const user = usersArray.find(user => parseInt(user.id) === parseInt(userId))
    const userIndex = usersArray.indexOf(user)

    user.homeId = newHome.id

    usersArray.splice(userIndex, 1, user)

    window.sessionStorage.setItem("homeId", user.homeId)

    this.setState({
      users: usersArray,
      homes: homeArray,
      isLoggedIn: true,
    })
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

  logOut = () => {

    this.setState({
      isLoggedIn: false,
    })
  }

  


  render() {
    return(
    <div className="App">
      <Nav isLoggedIn={this.state.isLoggedIn} logOut={this.logOut}/>
      <main className="App_main">
        <Switch>
          <Route
            exact
            path={'/'}
            render={(props) => 
              <LandingPage 
                {...props}
                isLoggedIn = {this.state.isLoggedIn}
              />}
          />
          <Route
            path={'/login'}
            render={(props) => 
              <LoginPage 
                {...props}
                loginFunction = {this.logIn}
              />
            }
          />
          <Route
            path={'/signup'}
            render={(props) => 
              <SignUpPage 
                {...props}
                signUpFunction = {this.signUp}
              />
            }
          />
          <Route
            path={'/score-board'}
            render={(props) => 
              <ScoreboardPage 
                {...props}
                users = {this.state.users}
                homes = {this.state.homes}
              />
            }
          />
          <Route
            path={'/join-home'}
            render={(props) => 
              <JoinHomePage 
                {...props}
                joinHomeFunction = {this.joinHome}
              />
            }
          />
          <Route
            path={'/assign-task/:taskId'}
            render={(props) => 
              <AssignPage 
                {...props}
                assignTaskFunction = {this.assignTask}
                users = {this.state.users}
                tasks = {this.state.tasks}
                homes = {this.state.homes}
              />
            }
          />
          <Route
            path={'/add-task'}
            render={(props) => 
              <AddTaskPage 
                {...props}
                addTaskFunction = {this.addTask}
                users = {this.state.users}
                homes = {this.state.homes}
              />
            }
          />
          <Route
            path={'/add-home'}
            render={(props) => 
              <AddHomePage 
                {...props}
                addHomeFunction = {this.addHome}
                users = {this.state.users}
                homes = {this.state.homes}
              />
            }
          />
          <Route
            path={'/add-family-member'}
            render={(props) => 
              <AddFamilyMemberPage 
                {...props}
                addFamilyMemberFunction = {this.addFamilyMember}
              />
            }
          />
          <Route
            path={'/task-list-own'}
            render={(props) => 
              <MyTasks
                {...props}
                deleteTaskFunction = {this.deleteTask}
                checkOffTaskFunction = {this.checkOffTask}
                users = {this.state.users}
                tasks = {this.populateTasks}
                homes = {this.state.homes}
              />
            }
          />
          <Route
            path={'/task-list'}
            render={(props) => 
              <AllTasks
                {...props}
                deleteTaskFunction = {this.deleteTask}
                checkOffTaskFunction = {this.checkOffTask}
                users = {this.state.users}
                tasks = {this.state.tasks}
                homes = {this.state.homes}
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