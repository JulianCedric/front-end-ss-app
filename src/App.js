// 7/25 - JP Notes: I'm thinking /sessions/:id can be more of 'add notes' for tutors --- or just build out a new component (??) --- TBD.

// Sample session object:
  // { "sessions": [
  //   {
  //       "id": 1,
  //       "tutorId": 1,
  //       "studentId": 1,
  //       "date": "",
  //       "completionStatus": false,
  //       "comment": ""
  //   }
  // ]}

import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Sessions from './components/Sessions';
import Session from './components/Session';
import Form from './components/Form';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Navbar />

        <Switch>
          
          <Route exact path="/" render={() => <Home />}/>

          <Route path="/about" render={() => <About />}/>

          <Route path="/login" render={() => <Login />}/>

          <Route path="/sessions" render={() => <Sessions />}/>

          <Route path="/sessions/:id" render={() => <Session />}/>

        </Switch>

      </div>
    );
  }
}

export default App; 

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
