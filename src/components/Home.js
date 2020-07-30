import React from 'react';
import { Route, Switch} from 'react-router-dom';
import NewSessionForm from './NewSessionForm';
import SessionsContainer from './SessionsContainer';

class Home extends React.Component {
    // Deleted the About component - contents to be moved here, below, in Home.js.
    // Next: Render list of sessions on homepage as well.

    state = {
        search: ""
    }

    filterBy = () => {
        return this.props.students.filter(student => student.name.toLowerCase().includes(this.state.search.toLowerCase()))
    } 
      
    handleSearch = e => {
        this.setState({search: e.target.value})
    }

    // handleClick = e => {
        
    // }

    render() { 
        let searchedStudents = this.filterBy()
        return (
            <div className="home">
                <h2 className="mediumPurpleText">Home</h2>
            <div className="sessions">
                <ul>
                    {searchedStudents.map(student => <p>{student.name}</p>)}
                </ul><br></br>
            </div>
            <div className="test-area">
                <input name="search" placeHolder="Search Students" value={this.state.search} onChange={this.handleSearch} /><br></br><br></br>
                {/* <button onClick={this.handleClick}>Test Button</button>  */}
            </div>
            <Switch> 
                <Route exact path="/sessions/new" render={(props) => <NewSessionForm sessions={this.state.sessions} changeSessionsState={this.changeSessionsState} students={this.state.students} changeStudentsState={this.changeStudentsState} tutors={this.state.tutors} changeTutorsState={this.changeTutorsState} handleNewSession={this.handleNewSession} {...props}/>}/>
                <Route exact path="/sessions" render={(routerProps, props) => <SessionsContainer sessions={this.state.sessions} students={this.state.students} tutors={this.state.tutors} deleteSession={this.deleteSession} {...routerProps} {...props} />}/>
            </Switch>
            </div>
        )
    }
}
 
export default Home; 
// 