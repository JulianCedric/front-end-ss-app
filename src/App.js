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
import Sessions from './components/Sessions';
import Login from './components/Login';
import Home from './components/Home';

const API = "http://localhost:3005/api/v1/sessions"

class App extends React.Component {
  state = {  
    view: 'home',
    sessions: [],
    students: [],
    tutors: [],
    completionStatus: false
  }

changeSessionsState = sessions => {
    this.setState({sessions: sessions})
  }

changeStudentsState = students => {
    this.setState({students})
  }

changeTutorsState = tutors => {
    this.setState({tutors})
  }

  handleNewSession = (newSession) => {
    this.setState({sessions: [...this.state.sessions, newSession]})
  }

  updateStatus = (sessionId, preAssessmentCompletionStatus) => {
    fetch(`http://localhost:3005/sessions/${sessionsId}`, {
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
  }

  deleteSession = id => {
    console.log(id)
    fetch(`http://localhost:3005/api/v1/sessions/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        Accept: 'application/json'
      },
    })
      .then(resp =>resp.json())
      .then(()=>{
            let newSessionsArray = this.state.sessions.filter(session=> session.id !== id)
            this.setState({session: newSessionsArray})
        })
    

    }

  render(){

    // console.log(this.state)

    return (
      <div className="App">
        <Navbar /> 
        <Switch>
          <Route exact path="/sessions/new" render={(props) => <NewSessionForm students={this.state.students} changeStudentsState={this.changeStudentsState} tutors={this.state.tutors} changeTutorsState={this.changeTutorsState} sessions={this.state.sessions} changeSessionsState={this.changeSessionsState} handleNewSession={this.handleNewSession} {...props}/>}/>
          <Route exact path="/sessions" render={(props) => <Sessions sessions={this.state.sessions} students={this.state.students} tutors={this.state.tutors} deleteSession={this.deleteSession} {...props}/>}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/" render={(props) => <Home {...props} x={this.x} />}/>
        </Switch>
      </div>
    );
  }
}

export default App; 