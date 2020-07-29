import React from 'react';
import { Route, Switch} from 'react-router-dom';
import SessionDetails from "./SessionDetails";

const API = "http://localhost:3005/api/v1/sessions"
const API_Students = "http://localhost:3005/api/v1/students"
const API_Tutors = "http://localhost:3005/api/v1/tutors"

class Sessions extends React.Component {
    state = {
        completionStatus: false
    }

    fetchSessions = () => {
        fetch(API)
        .then(resp => resp.json())
        .then(sessions => this.props.changeSessionsState(sessions))
    }

    componentDidMount(){
        this.fetchSessions();
        this.fetchStudents();
        this.fetchTutors()
    }

    render(){

    let { sessions, students, tutors } = this.props

    console.log("Sessions: ")

    console.log(this.props)

        return (
            <div className="sessions">
                <h2 className="mediumPurpleText">Sessions</h2>
                <h3>Page Under Construction Until 7/29</h3>

                    {this.props.sessions.map(session => <SessionDetails key={session.id} {...session} deleteSession={this.props.deleteSession} history={this.props.history} />)}
                    {this.props.students.map(student => <SessionDetails key={student.id} {...student} history={this.props.history} />)}
                    {this.props.tutors.map(tutor => <SessionDetails key={tutor.id} {...tutor} history={this.props.history} />)}
                           
            </div>
        );
    };

}

export default Sessions;