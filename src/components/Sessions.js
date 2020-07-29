import React from 'react';
import { Route, Switch} from 'react-router-dom';
import SessionDetails from "./SessionDetails";

const Sessions = props => {
    
    let { sessions, students, tutors } = props

    console.log("Sessions: ")
    
    console.log(props)



        return (
            <div className="sessions">
                <h2 className="mediumPurpleText">Sessions</h2>
                <h3>Page Under Construction Until 7/29</h3>
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
                            {props.sessions.map(session => <SessionDetails key={session.id} {...session} deleteSession={props.deleteSession} history={props.history} />)}
                            {props.students.map(student => <SessionDetails key={student.id} {...student} history={props.history} />)}
                            {props.tutors.map(tutor => <SessionDetails key={tutor.id} {...tutor} history={props.history} />)}
                        </tbody>
                    </table>
</div>

        );
    };

export default Sessions;


