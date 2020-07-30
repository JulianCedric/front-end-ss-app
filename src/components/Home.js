// 

import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Sessions from './Sessions';
import NewSessionForm from './NewSessionForm';

const API = "http://localhost:3005/api/v1/sessions"
const API_Students = "http://localhost:3005/api/v1/students"
const API_Tutors = "http://localhost:3005/api/v1/tutors"

class Home extends React.Component {
    state = {  
        view: 'home',
        sessions: [],
        students: [],
        tutors: [],
        completionStatus: false
      }

    changeSessionsState = sessions => {
        this.setState({sessions})
    }
      
    changeStudentsState = students => {
        this.setState({students})
    }
      
    changeTutorsState = tutors => {
        this.setState({tutors})
    }

    fetchSessions = () => {
        fetch(API)
        .then(resp => resp.json())
        .then(sessions => {
            this.changeSessionsState(sessions)
            console.log(sessions)})
    }

    fetchStudents = () => {
        fetch(API_Students)
        .then(resp => resp.json())
        .then(students => {
            this.changeStudentsState(students) 
            console.log(students)})
    }

    fetchTutors = () => {
        fetch(API_Tutors)
        .then(resp => resp.json())
        .then(tutors => {
            this.changeTutorsState(tutors)
            console.log(tutors)})
    }

    componentDidMount(){
        this.fetchSessions();
        this.fetchStudents();
        this.fetchTutors()
    }

    render() { 
        return (
            <div className="home">
                <h2 className="mediumPurpleText">Home</h2>
                <div className="About">
                    <p> AP Life
                        Aware and Prepared for Life Beyond the Classroom.
                        What is AP Life?
                        While the education system provides the academic preparation students need to get into college,
                        The AP Life Program is a supplementary tutoring service that provides the missing non-academic
                        piece to ensure students are fully ‘aware and prepared’ for what comes next after high school
                        graduation. Upon completing the program, your high school student will:
                        1. Have the proper mindset going into college
                        2. Be able to handle the responsibilities of early adulthood
                        3. Make wiser, more well-informed decisions
                        How Does It Work?
                        ● 4 one-hour sessions scheduled over 1 month 
                        ● Sessions are in-person (typically at local coffee shops, determined by parents)
                        ● After each session, tutors will send parents a brief email that summarizes session notes and
                        highlights
                        Why Enroll?
                        By the time students are off to college, the chance for parents and educators to leave a significant
                        impact on their outlook and approach to life will have already passed. You may think of The AP Life
                        Program as a ‘crash course’ that shortens your child’s learning curve to being a mature & responsible
                        independent adult. Furthermore, our tutors are specially trained to serve as both teacher and mentor
                        to your high school student during this critical transition period in their development. Within the
                        familiar 1:1 tutoring environment, students receive the individualized attention and mentorship
                        needed to effectively grasp and apply the program’s traditionally adult-level content.
                    </p>
                </div>
                <Switch> 
                    <Route exact path="/sessions" render={(routerProps, props) => <Sessions sessions={this.props.x} {...routerProps} {...props} />}/>
                </Switch>
            </div>
        )
    }
}
 
export default Home;