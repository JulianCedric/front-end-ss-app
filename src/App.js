  // 7/29 - JP Notes: 

  // App.js:


import React from 'react';
import './App.css';
import {BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams} from 'react-router-dom';
import Navbar from './components/Navbar';
import NewSessionForm from './components/NewSessionForm';
import Sessions from './components/SessionsContainer';
import Login from './components/Login';
import Home from './components/Home';

const API = "http://localhost:3005/api/v1/sessions"
const API_Students = "http://localhost:3005/api/v1/students"
const API_Tutors = "http://localhost:3005/api/v1/tutors"

class App extends React.Component {
  state = {  
    sessions: [],
    students: [],
    tutors: [],
    // filter: ""
  }

/////// 



/////// 

changeSessionsState = sessions => {
  this.setState({sessions}, console.log(sessions))
}

changeStudentsState = students => {
  this.setState({students})
}

changeTutorsState = tutors => {
  this.setState({tutors})
}

fetchSessions = () => {
  fetch(API)
  .then(resp => resp.json())
  .then(sessions => {
      this.changeSessionsState(sessions)
      console.log(sessions)})
}

fetchStudents = () => {
  fetch(API_Students)
  .then(resp => resp.json())
  .then(students => {
      this.changeStudentsState(students) 
      console.log(students)})
}

fetchTutors = () => {
  fetch(API_Tutors)
  .then(resp => resp.json())
  .then(tutors => {
      this.changeTutorsState(tutors)
      console.log(tutors)})
}

componentDidMount(){
  this.fetchSessions();
  this.fetchStudents();
  this.fetchTutors()
}

handleNewSession = (newSession) => {
  this.setState({sessions: [...this.state.sessions, newSession]})
}

updateStatus = (sessionId, preAssessmentCompletionStatus) => {
fetch(`http://localhost:3005/sessions/${sessionId}`, {
  method: 'PATCH',
  headers: {
      "Content-Type": "application/json",
  Accept: "application/json"
  },
  body: JSON.stringify( {
      preAssessmentCompletionStatus: true
  })
  })
  .then(resp => resp.json())
  .then(updatedSession => {
      let newSessionArray = this.state.sessions.map(session => {
      if (session.id === sessionId) {
      return updatedSession
  }
      return session
  })
})}

deleteSession = id => {
fetch(`http://localhost:3005/api/v1/sessions/${id}`, {
  method: 'DELETE',
  headers: {
  "Content-Type": "application/json",
  Accept: 'application/json'
  },
})
  .then(resp =>resp.json())
  .then(() => {
      let newSessionsArray = this.state.sessions.filter(session=> session.id !== id)
      this.setState({session: newSessionsArray})
  })
}
  
  render(){
    return (
      <div className="App">
        <Navbar /> 
        <Switch>
          <Route exact path="/sessions/new" render={routerProps => <NewSessionForm {...routerProps}/>}/>
          <Route exact path="/sessions" render={routerProps => <Sessions {...routerProps}/>}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/" render={routerProps => <Home students={this.state.students} {...routerProps} />}/>
        </Switch>
      </div>
    );
  }
}

export default App; 