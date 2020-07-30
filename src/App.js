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

class App extends React.Component {
        
  render(){
    return (
      <div className="App">
        <Navbar /> 
        <Switch>
          <Route exact path="/sessions/new" render={routerProps => <NewSessionForm {...routerProps}/>}/>
          <Route exact path="/sessions" render={routerProps => <Sessions {...routerProps}/>}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/" render={routerProps => <Home {...routerProps} />}/>
        </Switch>
      </div>
    );
  }
}

export default App; 