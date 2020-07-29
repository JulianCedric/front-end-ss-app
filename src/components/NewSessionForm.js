import React from 'react';
import { Switch } from 'react-router-dom'

class NewSessionForm extends React.Component {
    state = {
        date: "",
        comment: ""
    }

////////////////////////////////////////////////////////////////////////////////////////////////////

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

////////////////////////////////////////////////////////////////////////////////////////////////////

    handleSubmit = e => {
        e.preventDefault()
        fetch("http://localhost:3001/api/v1/sessions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
              date: this.state.date,
              comment: this.state.comment 
          })
        })
          .then(resp => resp.json())
          .then(newSession => {this.props.handleNewSession(newSession) 
          console.log("fetch")
            this.setState({
              date: "",
              comment: "", 
            })}
        )
        this.props.history.push('/')
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////

    render(){
        let { date, comment } = this.state;
        return (
            <div className="simple-flex-col">

                <h2 className="mediumPurpleText">Create a New Session</h2>
                    <form onSubmit={this.handleSubmit}>
                        <textarea name="date" placeholder="" value={date} onChange={this.handleChange}/><br></br>
                        <textarea name="comment" placeholder="Your Notes.. " value={comment} onChange={this.handleChange}/><br></br><br></br>
                        <button type="submit">Submit</button>
                    </form>


            </div>
        )
    }
}

export default NewSessionForm; 

 {/* <input name="time" placeholder="Time" value={this.state.time} onChange={this.handleChange}/><br></br> */}

                {/* <input name="student" placeholder="Student's Name" value={this.state.} onChange={this.handleChange}/><br></br> */}
                {/* <input name="school" placeholder="School Name" value={this.state.} onChange={this.handleChange}/><br></br> */}

                {/* <input name="parent" placeholder="Parent's Name" value={this.state.} onChange={this.handleChange}/><br></br> */}
                {/* <input name="preAssessmentCompletionStatus" placeholder="Pre-Assessment Status" value={this.state.} onChange={this.handleChange}/><br></br> */}
                    