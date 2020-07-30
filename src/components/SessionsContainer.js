import React from 'react';
import SessionItem from "./SessionItem";

const SessionsContainer = props => {
    console.log(props.sessions)
    let { sessions, students, tutors } = props;
    console.log(sessions)
    return (
        <>
        <div className="sessions-container">
            <h2 className="mediumPurpleText">Sessions</h2>
                <div>
                    {sessions.map(session => <SessionItem key={session.id} {...session} history={props.history} />)}        
                    {students.map(student => <SessionItem key={student.id} {...student} history={props.history} />)}
                    {tutors.map(tutor => <SessionItem key={tutor.id} {...tutor} history={props.history} />)}
                </div>
        </div>
        </>
    );
}

export default SessionsContainer;