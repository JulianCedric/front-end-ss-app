// 

import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Sessions from './Sessions';
import NewSessionForm from './NewSessionForm';

const API = "http://localhost:3001/api/v1/sessions"
// const API_Students = "http://localhost:3001/api/v1/students"
// const API_Tutors = "http://localhost:3001/api/v1/tutors"

class Home extends React.Component {
    // state moved to App.js re: NewSessionForm (redirect)

    fetchSessions = () => {
    //     fetch(API)
    //     .then(resp => resp.json())
    //     .then(sessions => this.props.changeSessionsState(sessions))
    }

    componentDidMount(){
        // this.fetchSessions();
    }

    // fetchStudents = () => {
    //     fetch(API_Students)
    //     .then(resp => resp.json())
    //     .then(students => {
    //         this.props.changeStudentsState(students) 
    //         console.log(students)})
    // }

    // fetchTutors = () => {
    //     fetch(API_Tutors)
    //     .then(resp => resp.json())
    //     .then(tutors => this.props.changeTutorsState(tutors))
    // }



    render() { 

        return (
            <div className="home">
                <h2 className="mediumPurpleText">Home</h2>
                <Switch> 
                    <Route exact path="/sessions/new" render={(props) => <NewSessionForm {...props} />}/>
                    <Route exact path="/sessions" render={(routerProps, props) => <Sessions sessions={this.props.x} {...routerProps} {...props} />}/>
                </Switch>
            </div>
        )
    }
}
 
export default Home;