import React from 'react';
import { Route, Switch} from 'react-router-dom';
import SessionDetails from "./SessionDetails";

const Sessions = props => {
    
    let { sessions } = props

    console.log("Sessions")

        return (
            <div className="sessions">
                <h2 className="mediumPurpleText">Sessions</h2>
                <h3>Sessions Table Goes Here</h3>
                <div>
                    {props.sessions.map(session => <SessionDetails key={session.id} {...session} history={props.history} />)}
                </div>
            </div>
        );
    };

export default Sessions;

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

