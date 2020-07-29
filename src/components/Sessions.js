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

                    {props.sessions.map(session => <SessionDetails name="session" id={session.id} key={session.id} {...session} deleteSession={props.deleteSession} history={props.history} />)}
                    {props.students.map(student => <SessionDetails name="student" key={student.id} {...student} history={props.history} />)}
                    {props.tutors.map(tutor => <SessionDetails name="tutor" key={tutor.id} {...tutor} history={props.history} />)}
                           
            </div>
        );
    };

export default Sessions;


{/*                 
                    <table>
                        <thead>
                            
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

                            <tbody>
                                {props.sessions.map(session => <SessionDetails key={session.id} {...session} deleteSession={props.deleteSession} history={props.history} />)}
                                {props.students.map(student => <SessionDetails key={student.id} {...student} history={props.history} />)}
                                {props.tutors.map(tutor => <SessionDetails key={tutor.id} {...tutor} history={props.history} />)}
                            </tbody>
                            </thead>
                    </table> */}
// </div>

