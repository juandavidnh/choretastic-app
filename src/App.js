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
      isLoggedIn: Boolean(window.sessionStorage.getItem("isLoggedIn")),
    })
  }

  addHome = (name, password, repeatPassword) => {
    if (password !== repeatPassword) {
      this.setState({
        error: true
      })
    }

    const newId = this.state.homes.length + 1
    const newHome = {
      id: newId,
      password: password,
      homeName: name
    }

    const homeArray = this.state.homes
    homeArray.push(newHome)

    this.setState({
      homes: homeArray
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
      status: "pending"
    }

    const tasksArray = this.state.tasks
    const newTasksArray = tasksArray.push(newTask)

    this.setState({
      tasks: newTasksArray
    })
  }

  assignTask = (taskId, assigneeId) => {
    const tasksArray = this.state.tasks
    const taskSelect= tasksArray.find(task => task.id === taskId)
    const taskIndex = tasksArray.indexOf(taskSelect)
    const newTask = {
      id: taskSelect.id,
      taskName: taskSelect.taskName,
      points: taskSelect.points,
      assigneeId: assigneeId,
      dateCreated: taskSelect.dateCreated, 
      status: taskSelect.status
    }

    const newTasksAray = tasksArray.splice(taskIndex, 1, newTask)

    this.setState({
      tasks: newTasksAray
    })

  }

  signUp = (email, password, repeatPassword, name, lastName, nickname) => {
    if (password !== repeatPassword) {
      this.setState({
        error: true
      })
    }

    const usersArray = this.state.users

    const newId = this.state.users.length + 1
    const newUser = {
      id: newId,
      email: email,
      password: password,
      name: name,
      lastName: lastName,
      nickname: nickname
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

    if(password !== selectHome.password) {
      this.setState({
        error: true
      })
    }

    const usersArray = this.state.users
    const selectUser = usersArray.find(user => parseInt(user.id) === parseInt(userId))

    selectUser.homeId = selectHome.id

    usersArray.splice(parseInt(userId)-1, 1, selectUser)

    window.sessionStorage.setItem("homeId", selectUser.homeId)
    window.sessionStorage.setItem("isLoggedIn", true)
    
    this.setState({
      users: usersArray, 
      isLoggedIn: true,     
    })
  }

  logIn = (userEmail, password) => {
    const usersArray = this.state.users
    console.log(usersArray)
    const selectUser = usersArray.find(user => user.email === userEmail)
    console.log(selectUser)
    
    if(password !== selectUser.password){
      this.setState({
        error: true
      })
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
    const newTasksArray = tasksArray.splice(taskId, 1)

    this.setState({
      tasks: newTasksArray
    })
  }

  checkOffTask = (taskId) => {
    const tasksArray = this.state.tasks
    const selectTask = tasksArray.find(task => task.id === taskId)

    selectTask.status = "Done"
    
    tasksArray.splice(taskId, 1, selectTask)

    const newTasksArray = tasksArray

    this.setState({
      tasks: newTasksArray
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
            path={'/assign-task'}
            render={(props) => 
              <AssignPage 
                {...props}
                assignTaskFunction = {this.assignTask}
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
              />
            }
          />
          <Route
            path={'/add-home'}
            render={(props) => 
              <AddHomePage 
                {...props}
                addHomeFunction = {this.addHome}
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