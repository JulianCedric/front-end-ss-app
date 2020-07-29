import React from 'react';
import { Route, Switch} from 'react-router-dom';
import SessionDetails from "./SessionDetails";

const Sessions = props => {
    
    let { sessions } = props

    console.log("Sessions: ")
    console.log(props)

        return (
            <div className="sessions">
                <h2 className="mediumPurpleText">Sessions</h2>
                <h3>Sessions Table Goes Here</h3>
                    <table>
                        <tbody>
                            <tr>
                                <th>
                                    <h4>Date</h4>
                                </th>
                                <th>
                                    <h4>Student</h4>
                                </th>
                                <th>
                                    <h4>My Notes</h4>
                                </th>
                                <th>
                                    <h4> + </h4>    
                                </th>
                                <th>
                                    <h4> - </h4>    
                                </th>
                            </tr>
                            {props.sessions.map(session => <SessionDetails key={session.id} {...session} history={props.history} />)}
                        </tbody>
                    </table>
</div>

        );
    };

export default Sessions;


