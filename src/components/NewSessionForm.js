import React from 'react';
import { Switch } from 'react-router-dom'

const API = "http://localhost:3001/api/v1/sessions"
const API_Students = "http://localhost:3001/api/v1/students"
const API_Tutors = "http://localhost:3001/api/v1/tutors"

class NewSessionForm extends React.Component {
    state = {
        tutor_id: "",
        student_id: "",
        date: "",
        comment: ""
    }

    fetchSessions = () => {
        fetch(API)
        .then(resp => resp.json())
        .then(sessions => this.props.changeSessionsState(sessions))
    }

    fetchStudents = () => {
        fetch(API_Students)
        .then(resp => resp.json())
        .then(students => {
            this.props.changeStudentsState(students) 
            console.log(students)})
    }

    fetchTutors = () => {
        fetch(API_Tutors)
        .then(resp => resp.json())
        .then(tutors => this.props.changeTutorsState(tutors))
    }

    componentDidMount(){
        this.fetchSessions();
        this.fetchStudents();
        this.fetchTutors()
    }

////////////////////////////////////////////////////////////////////////////////////////////////////

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

////////////////////////////////////////////////////////////////////////////////////////////////////


    handleSubmit = e => {
        e.preventDefault()
        // console.log("pre-fetch")
        fetch("http://localhost:3001/api/v1/sessions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
              tutor_id: parseInt(this.state.tutor_id),
              student_id: parseInt(this.state.student_id),
              preAssessmentCompletionStatus: false,
              date: this.state.date,
              comment: this.state.comment 
          })
        })
          .then(resp => resp.json())
          .then(newSession => {this.props.handleNewSession(newSession) 
        //   console.log("fetchhuiaweitugaw;eiutg")
            this.setState({
              date: "",
              comment: "", 
            })}
        )
        this.props.history.push('/')
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////

    render(){
        let { tutor_id, student_id, date, comment } = this.state;

        return (
            <div className="simple-flex-col">

                <h2 className="mediumPurpleText">Create a New Session</h2>

                <form onSubmit={this.handleSubmit}>


                    <form action="/action_page.php">
                        <label>Select Tutor:</label><br></br>
                        <select name="tutor_id" id="tutor" value={this.state.tutors} onChange={this.handleChange}>
                            {this.props.tutors.map((tutor, index) => 
                                <option value={tutor.id} key={index} > {tutor.name} </option>
                            )};
                        </select>                    
                    </form><br></br>

                    <form action="/action_page.php">
                    <label>Select Student:</label><br></br>
                        <select name="student_id" id="students" value={this.state.students} onChange={this.handleChange}>
                            {this.props.students.map((student, index) => 
                                <option value={student.id} key={index} > {student.name} </option>
                            )};
                        </select>                    

                    </form>
                    <br></br>

                    <input name="date" placeholder="" value={date} onChange={this.handleChange}/><br></br><br></br>

                    <textarea name="comment" placeholder="Your Notes.. " value={comment} onChange={this.handleChange}/><br></br><br></br>

                    <button type="submit">Submit</button>

                    </form>


            </div>
        )
    }
}

export default NewSessionForm; 

{/* 
                    <form onSubmit={this.handleSubmit}>
                        <textarea name="date" placeholder="" value={date} onChange={this.handleChange}/><br></br>
                        <textarea name="comment" placeholder="Your Notes.. " value={comment} onChange={this.handleChange}/><br></br><br></br>
                        <button type="submit">Submit</button>
                    </form> */}
 {/* <input name="time" placeholder="Time" value={this.state.time} onChange={this.handleChange}/><br></br> */}

                {/* <input name="student" placeholder="Student's Name" value={this.state.} onChange={this.handleChange}/><br></br> */}
                {/* <input name="school" placeholder="School Name" value={this.state.} onChange={this.handleChange}/><br></br> */}

                {/* <input name="parent" placeholder="Parent's Name" value={this.state.} onChange={this.handleChange}/><br></br> */}
                {/* <input name="preAssessmentCompletionStatus" placeholder="Pre-Assessment Status" value={this.state.} onChange={this.handleChange}/><br></br> */}
                    