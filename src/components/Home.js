// 

import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Sessions from './Sessions';
import NewSessionForm from './NewSessionForm';

const API = "http://localhost:3001/api/v1/sessions.json"

class Home extends React.Component {
    state = {  
        sessions: []
    }

    componentDidMount(){
        fetch(API)
        .then(resp => resp.json())
        .then(sessions => this.setState({sessions}, () => console.log(sessions)))
      }

      handleNewSession = (newSession) => {
        this.setState({sessions: [...this.state.sessions, newSession]})
      }

    render() { 
        return (
            <div className="home">
                <h2 className="mediumPurpleText">Home</h2>
                <Switch> 
                    <Route path="/sessions" render={(routerProps) => <Sessions sessions={this.state.sessions} {...routerProps}/>}/>
                    <Route path="/sessions" render={() => <NewSessionForm />}/>
                </Switch>
            </div>
        )
    }
}
 
export default Home;