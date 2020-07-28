// import React from 'react';
// import { Route, Switch} from 'react-router-dom';
// import SessionDetails from "./SessionDetails";

// const SessionsContainer = props => {

//     let { match, sessions } = props;

//     // 7/27 - JP Notes: re: Switch / Route below - if the URL path matches /sessions, the function inside 'render' is invoked. 

   
//     return (
//         <div className="sessions-container">
//             <h2 className="mediumPurpleText">Sessions Container</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <td>Date</td>
//                         <td>Student</td>
//                         <td>My Notes</td>
//                         <td> + </td>
//                         <td> - </td>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 <Switch>
//                     <Route exact path={`${match.path}`} render={() => <> {sessions.map(session => <SessionDetails key={session.id} {...session} match={props.match} push={props.history.push}/>)} </>}/>
//                 </Switch>
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default SessionsContainer;
    
// {/* // class SessionsContainer extends React.Component { */}
// //     render() { 
// //         return (
// //             <div className="sessions-container">
// //                 <h2>Sessions Container</h2>
// //                     <Switch>
// //                         <Route exact path={`${match.path}`} render={() => <> {sessions.map(session => <SessionDetails key={session.id} {...session} match={props.match} push={props.history.push}/>)} </>}/>
// //                     </Switch>
// //             </div>
// //         );
// //     }   
// // }
 
// // export default SessionsContainer;

import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
          <div key={index}>
              <h3>Name: {director.name}</h3>
              <p>Movies:</p>
              <ul>
                  {director.movies.map((movie, index) => (
                      <li key={index}>{movie}</li>
                  ))}
              </ul>
          </div>
      ))}
    </div>
  );
}

export default Directors