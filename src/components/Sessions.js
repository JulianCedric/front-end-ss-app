import React from 'react';
import { Route, Switch} from 'react-router-dom';
import SessionDetails from "./SessionDetails";

const Sessions = props => {

    let { sessions } = props;

  return (
    <div className="sessions">
        <h2 className="mediumPurpleText">Sessions</h2>
    {/* <table>
        <thead>
            <tr>
                <td>Date</td>
                <td>Student</td>
                <td>My Notes</td>
                <td> + </td>
                <td> - </td>
            </tr>
        </thead>
        <tbody> */}



            <h1>Sessions Table Goes Here</h1>
            {/* {sessions.map(session => <SessionDetails key={session.id} {...session} match={props.match} push={props.history.push}/>)} */}
        {/* </tbody> */}
    {/* </table> */}
</div>
  );
}

export default Sessions