import React from 'react';
import { Route, Switch } from 'react-router-dom'

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
        fetch("http://localhost:3001/sessions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(this.state)
        })
          .then(resp => resp.json())
          .then(newSession => this.props.handleNewSession(newSession), 
            this.setState({
              date: "",
              comment: "", 
            })
        )
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////

    render(){
        let { date, comment } = this.state;
        return (
            <div className="simple-flex-col">

                <h2 className="mediumPurpleText">Create a New Session</h2>

                <textarea name="date" placeholder="" value={date} onChange={this.handleChange}/><br></br>
                <textarea name="date" placeholder="" value={date} onChange={this.handleChange}/><br></br>
                <textarea name="date" placeholder="" value={date} onChange={this.handleChange}/><br></br>
                <textarea name="date" placeholder="" value={date} onChange={this.handleChange}/><br></br>

                {/* <input name="time" placeholder="Time" value={this.state.time} onChange={this.handleChange}/><br></br> */}

                {/* <input name="student" placeholder="Student's Name" value={this.state.} onChange={this.handleChange}/><br></br> */}
                {/* <input name="school" placeholder="School Name" value={this.state.} onChange={this.handleChange}/><br></br> */}

                {/* <input name="parent" placeholder="Parent's Name" value={this.state.} onChange={this.handleChange}/><br></br> */}
                {/* <input name="preAssessmentCompletionStatus" placeholder="Pre-Assessment Status" value={this.state.} onChange={this.handleChange}/><br></br> */}
                <textarea name="comment" placeholder="Your Notes.. " value={comment} onChange={this.handleChange}/><br></br><br></br>
                <button type="submit" onClick={this.handleSubmit}>Submit</button>

            </div>
        )
    }
}

export default NewSessionForm; 