import React from 'react';

class NewSessionForm extends React.Component {
    state = {
        tutor_id: "",
        student_id: "",
        date: "",
        comment: ""
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        fetch("http://localhost:3005/api/v1/sessions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
              tutor_id: this.state.tutor_id,
              student_id: this.state.student_id,
              preAssessmentCompletionStatus: false,
              date: this.state.date,
              comment: this.state.comment 
          })
        })
          .then(resp => resp.json())
          .then(newSession => {this.props.handleNewSession(newSession) 
            this.setState({
                tutor_id: "",
                student_id: "",
                date: "",
                comment: ""
            })}
        )
        this.props.history.push('/')
    }

    render(){
        console.log(this.props)
        let { tutor_id, student_id, date, comment } = this.state;
        return (
            <div className="simple-flex-col">
                <h2 className="mediumPurpleText">Create a New Session</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Select Tutor:</label><br></br>
                    <select name="tutor_id" id="tutor" value={this.state.tutors} onChange={this.handleChange}>
                        {this.props.tutors.map((tutor, index) => 
                            <option value={tutor.id} key={index} > {tutor.name} </option>
                        )};
                    </select><br></br><br></br>           
                    <label>Select Student:</label><br></br>
                    <select name="student_id" id="students" value={this.state.students} onChange={this.handleChange}>
                        {this.props.students.map((student, index) => 
                            <option value={student.id} key={index} > {student.name} </option>
                        )};
                    </select>                    
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