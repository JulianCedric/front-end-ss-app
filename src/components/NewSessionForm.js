import React from 'react';
import Session from './Session'
import { Route, Switch } from 'react-router-dom'

class NewSessionForm extends React.Component {
    state = {
        date: "",
        time: "",
        student: "",
        school: "",
        parent: "",
        preAssessmentCompletionStatus: ""
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        console.log("Clicking submit --> back to homepage")
    }

    render(){
        let { subject, content, email } = this.state;
        return (
            <div className="simple-flex-col">

                <h2 className="mediumPurpleText">Create a New Session</h2>

                <input name="date" placeholder="Date" value={subject} onChange={this.handleChange}/><br></br>
                <input name="time" placeholder="Time" value={subject} onChange={this.handleChange}/><br></br>

                <input name="student" placeholder="Student's Name" value={subject} onChange={this.handleChange}/><br></br>
                <input name="school" placeholder="School Name" value={subject} onChange={this.handleChange}/><br></br>

                <input name="parent" placeholder="Parent's Name" value={subject} onChange={this.handleChange}/><br></br>
                <input name="preAssessmentCompletionStatus" placeholder="Pre-Assessment Status" value={subject} onChange={this.handleChange}/><br></br>

            <br></br>

                <h4>Add a Note</h4>

                    <textarea name="content" placeholder="Email Content" value={content} onChange={this.handleChange}/>

            <br></br>

                <button type="submit" onClick={this.handleSubmit}>Submit</button>

            </div>
        )
    }
}

export default NewSessionForm; 