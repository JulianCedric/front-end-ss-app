// 7/28 - JP Notes: Fixed errors w/ db. Finishing up C, U, D actions. 

// 7/27 - JP Notes: Reviewed routes labs .. to reconfigure routes (components tmrw).

// 7/26 - JP Notes: Slight pivot in app focus - 'info-gathering app' (in progress) 

// USER / CUSTOMER JOURNEY: 

// It all begins on the login page (/login). 

// A user enters in her username & password and then hits submit, which directs her to our homepage (/). 

// On the homepage, our user sees the:
  // 1. NavBar (which contains clickable links to the home, about, sessions, and login pages), along with  
  // 2. Upcoming Sessions for the week (which is displayed as a table with column headers: date, time, student, session details, and remove).

// The user then clicks on session details, which:
  // ***updated_new: renders the session details underneath the table (on the homepage)*** 
  // ***updated_old: directs her to an individual session page (/sessions/:id). 

// On this page, the user sees the following information: 

  // Date
  // Time
  // Student Name
  // School Name
  // Parent Name
  // Pre-Assessment Completion Status         // Change from default false to true for demo, then
  // Add a note (for parent)                  // Add a quick note: "Hi Mrs. Smith, Adam did great! Excited to start the program!"

  // ***Stretch Feature would be sending those notes to the parent's email, but for now, we'll just build out comment functionality.***

// After clicking the submit button, the user is directed back to the homepage, where she clicks 'remove' (for project/demo: delete functionality w/ e.preventDefault).

// Clicking the remove button will only delete that session in the front-end. 

// Finally, she clicks on the 'New Session' button (located on the NavBar), which directs her to the new session page(/newSession).

// Here, she simply fills out the form whose fields mirror those in the session page (/sessions/:id).

//////////////////////////////////////////////////////////////////////

// CRUD: 

  // Create:
    // A user can create a new session
    // A user can add a comment for (stretch: email to) parent of student

  // Read:
    // A user can view all upcoming sessions
    // A user can view an individual session's details 

// Update:
  // A user can update a student's pre-assessment completion status (in session details page)

// Delete: 
  // A user can delete a session

//////////////////////////////////////////////////////////////////////

// To-Do's: 

//      [ ] Resolve back-end issues, then update / seed database with updated data
//      [ ] .. 

//////////////////////////////////////////////////////////////////////

// 7/25 - JP Notes: I'm thinking /sessions/:id can be more of 'add notes' for tutors --- or just build out a new component (??) --- TBD.
// 7/25 - JP To-Do's:

//////////////////////////////////////////////////////////////////////

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
import About from './components/About';
import Login from './components/Login';
import Home from './components/Home';
import NewSessionForm from './components/NewSessionForm';
import Sessions from './components/Sessions';

const API = "http://localhost:3000/api/v1/sessions"

class App extends React.Component {
  state = {  
    view: 'home',
    sessions: [],
    students: [],
    tutors: []
  }

changeSessionsState = sessions => {
    this.setState({sessions})
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

  deleteSession = id => {
    // console.log("pre-fetch")
    fetch(API, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        Accept: 'application/json'
      }
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
        <Navbar view={this.state.view} /> 
        <Switch>
          <Route exact path="/about" render={(props) => <About {...props}/>}/>
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

 

{/* <Route path="/sessions/:id" render={() => <SessionDetails />}/>  */}



// export default function BasicExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//           <li>
//             <Link to="/sessions">Sessions</Link>
//           </li>
//         </ul>

//         <hr />

//         {/*
//           A <Switch> looks through all its children <Route>
//           elements and renders the first one whose path
//           matches the current URL. Use a <Switch> any time
//           you have multiple routes, but you want only one
//           of them to render at a time
//         */}
//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/login">
//             <Login />
//           </Route>
//           <Route path="/sessions">
//             <Sessions />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// // You can think of these components as "pages" in your app.

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function Login() {
//   return (
//     <div>
//       <h2>Login</h2>
//     </div>
//   );
// }

// function Sessions() {
//   return (
//     <div>
//       <h2>Sessions</h2>
//     </div>
//   );
// }