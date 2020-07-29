import React from 'react';
import { Route, Switch} from 'react-router-dom';
import SessionDetails from "./SessionDetails";

const Sessions = props => {
    
    let { sessions } = props

    console.log("Sessions: ")

        return (
            <div className="sessions">
                <h2 className="mediumPurpleText">Sessions</h2>
                <h3>Sessions Table Goes Here</h3>
<table>
        <thead>
            <tr>
                <th>Date {props.sessions}</th>
                <th>Student</th>
                <th>My Notes</th>
                <th> + </th>
                <th> - </th>
            </tr>
        </thead>
        <tbody>
            {props.sessions.map(session => <SessionDetails key={session.id} {...session} history={props.history} />)}
        </tbody>    

</table>
</div>

        );
    };

export default Sessions;


