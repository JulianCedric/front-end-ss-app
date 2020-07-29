// 

import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Sessions from './Sessions';
import NewSessionForm from './NewSessionForm';

const API = "http://localhost:3001/api/v1/sessions"
const API_Students = "http://localhost:3001/api/v1/students"
const API_Tutors = "http://localhost:3001/api/v1/tutors"

class Home extends React.Component {
    // state moved to App.js re: NewSessionForm (redirect)

    fetchSessions = () => {
        fetch(API)
        .then(resp => resp.json())
        .then(sessions => this.props.x)
    }

    fetchStudents = () => {
        fetch(API_Students)
        .then(resp => resp.json())
        .then(sessions => this.props.x)
    }

    fetchTutors = () => {
        fetch(API_Tutors)
        .then(resp => resp.json())
        .then(sessions => this.props.x)
    }

    componentDidMount(){
        this.fetchSessions();
        this.fetchStudents();
        this.fetchTutors()
    }


    // getData(){
    //     return this.componentDidMount()
    // }

    render() { 
        // this.getData()
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