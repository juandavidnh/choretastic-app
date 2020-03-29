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
import STORE from './dummy-store'
import './App.css'

class App extends React.Component {

  state = {
    homes: [],
    tasks: [],
    users: [],
    error: null,
    isLoggedIn: false
  }
  
  componentDidMount() {
    const data = STORE

    this.setState({
      homes: data.homes,
      tasks: data.tasks,
      users: data.users,
      isLoggedIn: window.sessionStorage.getItem("isLoggedIn")==="true",
    })
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
    window.sessionStorage.setItem("isLoggedIn", true)

    this.setState({
      users: usersArray,
      homes: homeArray,
      isLoggedIn: true,
    })
  }

  addTask = (taskName, points, assigneeId) => {
    const date = new Date()
    const newId = this.state.tasks.length + 1

    const newTask = {
      id: newId,
      taskName: taskName,
      points: points,
      assigneeId: assigneeId,
      dateCreated: date,
      status: "Pending"
    }

    const tasksArray = this.state.tasks
    tasksArray.push(newTask)

    this.setState({
      tasks: tasksArray
    })
  }

  assignTask = (taskId, assigneeId) => {
    const tasksArray = this.state.tasks
    const taskSelect= tasksArray.find(task => parseInt(task.id) === taskId)
    const taskIndex = tasksArray.indexOf(taskSelect)
    
    const newTask = {
      id: taskSelect.id,
      taskName: taskSelect.taskName,
      points: taskSelect.points,
      assigneeId: assigneeId,
      dateCreated: taskSelect.dateCreated, 
      status: taskSelect.status
    }

    tasksArray.splice(taskIndex, 1, newTask)

    this.setState({
      tasks: tasksArray,
      isLoggedIn: true
    })

  }

  signUp = (email, password, repeatPassword, name, lastName, nickname) => {
    if (password !== repeatPassword) {
      throw new Error(`Passwords don't match`)
    }

    for(let i = 0; i < this.state.users.length; i++){
      if(email===this.state.users[i].email){
        throw new Error(`User already exists, please click on 'I have an account already'`)
      }
    }

    const usersArray = this.state.users

    const newId = this.state.users.length + 1
    const newUser = {
      id: newId,
      email: email,
      password: password,
      name: name,
      lastName: lastName,
      nickname: nickname,
      points: 0
    }

    window.sessionStorage.setItem("userId", newId)

    usersArray.push(newUser)
    
    this.setState({
      users: usersArray,
    })

  }

  joinHome = (userId, password, homeName) => {
    const homesArray = this.state.homes
    const selectHome = homesArray.find(home => home.homeName === homeName)

    if(selectHome === undefined){
      throw new Error('Home not found, please try again.')
    }

    if(password !== selectHome.password) {
      throw new Error('Incorrect password, please try again.')
    }

    const usersArray = this.state.users
    const selectUser = usersArray.find(user => parseInt(user.id) === parseInt(userId))
    const userIndex = usersArray.indexOf(selectUser)

    selectUser.homeId = selectHome.id

    usersArray.splice(userIndex, 1, selectUser)

    window.sessionStorage.setItem("homeId", selectUser.homeId)
    window.sessionStorage.setItem("isLoggedIn", true)
    
    this.setState({
      users: usersArray, 
      isLoggedIn: true,     
    })
  }

  logIn = (userEmail, password) => {
    const usersArray = this.state.users
    const selectUser = usersArray.find(user => user.email === userEmail)

    if(selectUser === undefined){
      throw new Error('User not found, please try again.')
    }
    
    if(password !== selectUser.password){
      throw new Error('Incorrect password, please try again.')
    }

    window.sessionStorage.setItem("userId", selectUser.id)
    window.sessionStorage.setItem("homeId", selectUser.homeId)
    window.sessionStorage.setItem("isLoggedIn", true)

    this.setState({
      isLoggedIn: true,
    })
  }
 
  deleteTask = (taskId) => {
    const tasksArray = this.state.tasks
    const task = tasksArray.find(task => parseInt(task.id) === parseInt(taskId))
    const taskIndex = tasksArray.indexOf(task)

    tasksArray.splice(taskIndex, 1)

    this.setState({
      tasks: tasksArray
    })
  }

  checkOffTask = (taskId) => {
    const tasksArray = this.state.tasks
    const task = tasksArray.find(task => parseInt(task.id) === parseInt(taskId))
    const taskIndex = tasksArray.indexOf(task)

    task.status = "Done"
    
    tasksArray.splice(taskIndex, 1, task)

    const usersArray = this.state.users
    const user = usersArray.find(user => parseInt(user.id) === parseInt(task.assigneeId))
    const userIndex = usersArray.indexOf(user)
    const taskPoints = parseInt(task.points)

    user.points = parseInt(user.points) + taskPoints

    usersArray.splice(userIndex, 1, user)

    this.setState({
      tasks: tasksArray,
      users: usersArray
    })
  }

  logOut = () => {
    window.sessionStorage.setItem("isLoggedIn", false)

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
                users = {this.state.users}
                homes = {this.state.homes}
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
            path={'/task-list-own'}
            render={(props) => 
              <MyTasks
                {...props}
                deleteTaskFunction = {this.deleteTask}
                checkOffTaskFunction = {this.checkOffTask}
                users = {this.state.users}
                tasks = {this.state.tasks}
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

export default App;